export class BaseError extends Error {
  constructor(title, message) {
    super(message);
    this.name = this.constructor.name;
    this.title = title;
  }
}
