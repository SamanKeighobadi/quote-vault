import { Context, Next } from "hono";
import { z } from "zod";
import { Prisma } from "../src/generated/prisma";

type HttpStatusCode = 200 | 201 | 400 | 404 | 500;
interface ErrorResponse {
  status: "error";
  message: string;
  details?: unknown;
}

export const errorHandler = async (c: Context, next: Next) => {
  try {
    await next();
  } catch (error: unknown) {
    let statusCode: HttpStatusCode = 500;
    const response: ErrorResponse = {
      message: "Internal Server Error",
      status: "error",
    };

    if (error instanceof Error) {
      response.message = error.message;
    } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        statusCode = 400;
        response.message = "Duplicate entry detected.";
      }
    } else if (error instanceof z.ZodError) {
      statusCode = 400;
      response.message = "Validation Error";
      console.error("Validation Error:", error);
      response.details = error;
    }

    console.error("API Error:", error);

    return c.json(response, statusCode);
  }
};
