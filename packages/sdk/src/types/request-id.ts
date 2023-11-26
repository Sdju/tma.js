/**
 * Request identifier which should be generated locally. Native Telegram application
 * uses it to generate a response to called method.
 */
export type RequestId = string;

/**
 * Function which generates unique request identifiers.
 */
export type CreateRequestIdFunc = () => RequestId;
