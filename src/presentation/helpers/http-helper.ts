import { HttpResponse } from "../protocols/http";

export const badRequest = (errorMessage: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: errorMessage
  }
}