import { ServerError, Status } from 'nice-grpc-common';

export class NotFoundError extends ServerError {
  constructor(message: string = 'NOT_FOUND') {
    super(Status.NOT_FOUND, message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}