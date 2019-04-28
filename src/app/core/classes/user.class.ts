export class User {
  constructor(loginName: string, displayName: string, password: string) {
    this.loginName = loginName;
    this.displayName = displayName;
    this.password = password;
  }

  public loginName: string;
  public displayName: string;
  public password: string;
}
