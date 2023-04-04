import { BaseError } from './index.js';

export class HttpError extends BaseError {
  constructor(title, message, statusCode) {
    super(title, message);
    this.statusCode = statusCode;
  }
}
