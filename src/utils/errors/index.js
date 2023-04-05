// type - error, warning, info
// used by the 'Warning' component to determine the style of the warning

export class BaseError extends Error {
  constructor(type, title, message) {
    super(message);
    this.name = this.constructor.name;
    this.title = title;
    this.type = type;
  }
}
