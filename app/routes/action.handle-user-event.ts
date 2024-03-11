import { db } from "@/database/db.server";
import type { WebhookEvent } from "@clerk/remix/api.server";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Webhook } from "svix";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET)
      throw new Error(
        "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
      );

    const headers = request.headers;
    const svix_id = headers.get("svix-id");
    const svix_timestamp = headers.get("svix-timestamp");
    const svix_signature = headers.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error: No Webhook Headers", {
        status: 400,
        statusText: "Bad Request",
      });
    }

    const payload = await request.json();
    const body = JSON.stringify(payload);

    const webhook = new Webhook(WEBHOOK_SECRET);
    let event: WebhookEvent;

    try {
      event = webhook.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error: Webhook Verification Failed", {
        status: 400,
        statusText: "Bad Request",
      });
    }

    if (event.type === "user.created" || event.type === "user.updated") {
      const client = await db.user.findUnique({
        where: {
          userAuthId: event.data.id,
        },
      });

      if (!client)
        await db.user.create({ data: { userAuthId: event.data.id } });
    }

    if (event.type === "user.deleted") {
      const deleteAllBoards = db.board.deleteMany({
        where: {
          userId: event.data.id,
        },
      });

      const deleteUser = db.user.delete({
        where: {
          userAuthId: event.data.id,
        },
      });

      await db.$transaction([deleteAllBoards, deleteUser]);
    }

    return json("Webhook Request Success", { status: 200 });
  } catch (err) {
    return json("Webhook Request Failed", { status: 400 });
  }
}