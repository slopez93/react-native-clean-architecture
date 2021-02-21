export class UserModel {
  public id: string;
  public name: string;
  public username: string;
  public email: string;

  constructor(id: string, name: string, username: string, email: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
  }

  static fromJSON(data: any): UserModel {
    return new UserModel(data.id, data.name, data.username, data.email);
  }

  static fromArrayJSON(data: any): Array<UserModel> {
    return data.map((item: any) => UserModel.fromJSON(item));
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
    };
  }
}
