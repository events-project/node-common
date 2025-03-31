import { Status } from 'nice-grpc-common';
import { GrpcError } from './base-error';

/**
 * Error for when a requested resource is not found
 */
export class NotFoundError extends GrpcError {
  constructor(message: string = 'Resource not found', metadata?: Record<string, string>) {
    super(message, Status.NOT_FOUND, metadata);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

/**
 * Error for when a request is invalid
 */
export class InvalidArgumentError extends GrpcError {
  constructor(message: string = 'Invalid argument', metadata?: Record<string, string>) {
    super(message, Status.INVALID_ARGUMENT, metadata);
    Object.setPrototypeOf(this, InvalidArgumentError.prototype);
  }
}

/**
 * Error for when a resource already exists
 */
export class AlreadyExistsError extends GrpcError {
  constructor(message: string = 'Resource already exists', metadata?: Record<string, string>) {
    super(message, Status.ALREADY_EXISTS, metadata);
    Object.setPrototypeOf(this, AlreadyExistsError.prototype);
  }
}

/**
 * Error for when a user is not authenticated
 */
export class UnauthenticatedError extends GrpcError {
  constructor(message: string = 'Unauthenticated', metadata?: Record<string, string>) {
    super(message, Status.UNAUTHENTICATED, metadata);
    Object.setPrototypeOf(this, UnauthenticatedError.prototype);
  }
}

/**
 * Error for when a user does not have permission
 */
export class PermissionDeniedError extends GrpcError {
  constructor(message: string = 'Permission denied', metadata?: Record<string, string>) {
    super(message, Status.PERMISSION_DENIED, metadata);
    Object.setPrototypeOf(this, PermissionDeniedError.prototype);
  }
}

/**
 * Error for when a resource is unavailable
 */
export class UnavailableError extends GrpcError {
  constructor(message: string = 'Service unavailable', metadata?: Record<string, string>) {
    super(message, Status.UNAVAILABLE, metadata);
    Object.setPrototypeOf(this, UnavailableError.prototype);
  }
}

/**
 * Error for when a deadline is exceeded
 */
export class DeadlineExceededError extends GrpcError {
  constructor(message: string = 'Deadline exceeded', metadata?: Record<string, string>) {
    super(message, Status.DEADLINE_EXCEEDED, metadata);
    Object.setPrototypeOf(this, DeadlineExceededError.prototype);
  }
}

/**
 * Error for internal server errors
 */
export class InternalError extends GrpcError {
  constructor(message: string = 'Internal server error', metadata?: Record<string, string>) {
    super(message, Status.INTERNAL, metadata);
    Object.setPrototypeOf(this, InternalError.prototype);
  }
}
