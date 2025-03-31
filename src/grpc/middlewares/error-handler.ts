import { CallContext, ServerError, ServerMiddlewareCall } from 'nice-grpc';
import { isAbortError } from 'abort-controller-x';
import { UnknownError } from '../specific-errors';

export async function* errorHandlingMiddleware<Request, Response>(
  call: ServerMiddlewareCall<Request, Response>,
  context: CallContext
) {
  try {
    return yield* call.next(call.request, context);
  } catch (error: unknown) {
    if (error instanceof ServerError || isAbortError(error)) {
      throw error;
    }
    throw new UnknownError();
  }
}
