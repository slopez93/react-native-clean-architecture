export class User {
  private _id: string;
  private _email: string;

  constructor(id: string, email: string) {
    this._id = id;
    this._email = email;
  }

  static create(id: string, email: string): User {
    return new User(id, email);
  }

  public get id() {
    return this._id;
  }

  public get email() {
    return this._email;
  }
}
