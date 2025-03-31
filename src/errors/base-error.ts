import { Status } from 'nice-grpc-common';

/**
 * Base class for all gRPC errors
 */
export class GrpcError extends Error {
  /**
   * The gRPC status code
   */
  public readonly code: Status;

  /**
   * Optional metadata to include with the error
   */
  public readonly metadata?: Record<string, string>;

  /**
   * Creates a new gRPC error
   * 
   * @param message - Error message
   * @param code - gRPC status code
   * @param metadata - Optional metadata to include with the error
   */
  constructor(message: string, code: Status, metadata?: Record<string, string>) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.metadata = metadata;
    
    // This is needed for proper instanceof checks with custom errors in TypeScript
    Object.setPrototypeOf(this, GrpcError.prototype);
  }
}
