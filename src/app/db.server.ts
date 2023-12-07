import { singleton } from "@/helpers/utils";
import { PrismaClient } from "@prisma/client";

export const db = singleton("prisma", () => {
  const production = process.env.NODE_ENV === "production";

  return new PrismaClient({
    errorFormat: production ? "minimal" : "pretty",
    log: production ? ["error"] : ["query", "error", "warn"],
  }) as PrismaClient;
});
