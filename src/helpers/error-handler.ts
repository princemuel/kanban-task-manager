import { HttpError, isHttpError } from "http-errors-enhanced";
import { z } from "zod";

export function handleServerError(exception: unknown) {
  const defaultMessage =
    "Error (500): An unknown error occurred. Please try again";

  if (isHttpError(exception)) {
    const error = exception as HttpError;

    const message = error.expose ? error.message : defaultMessage;
    return Response.json(
      { status: "failed", error: message },
      { status: error.status },
    );
  } else if (exception instanceof z.ZodError) {
    const message = exception.errors.map((issue) => issue.message).join("; ");
    return Response.json({ status: "failed", error: message }, { status: 400 });
  }

  return Response.json(
    { status: "failed", error: defaultMessage },
    { status: 500 },
  );
}
