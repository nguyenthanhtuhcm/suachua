export type ActionResponse<T> = {
  success: boolean;
  data?: T;
  serverError?: string;
  validationErrors?: Record<string, string[]>;
};

export function createActionSuccess<T>(data: T): ActionResponse<T> {
  return {
    success: true,
    data,
  };
}

export function createActionFailure(serverError: string): ActionResponse<never> {
  return {
    success: false,
    serverError,
  };
}

export function createValidationFailure(
  validationErrors: Record<string, string[]>,
): ActionResponse<never> {
  return {
    success: false,
    validationErrors,
  };
}
