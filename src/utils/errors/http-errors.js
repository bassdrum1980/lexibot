import { BaseError } from './index.js';

export class HttpError extends BaseError {
  constructor(type, title, message, statusCode) {
    super(type, title, message);
    this.statusCode = statusCode;
  }
}
