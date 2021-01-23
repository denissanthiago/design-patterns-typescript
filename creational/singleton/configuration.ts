import config from "./config.json";

export default class MyConfiguration {
  static instance: MyConfiguration;

  private static _environment: string;
  private static _url: string;
  private static _username: string;
  private static _password: string;

  private constructor() {}

  private static initialize(): void {
    this._environment = config.environment;
    this._url = config.url;
    this._username = config.username;
    this._password = config.password;
  }

  public static getInstance(): MyConfiguration {
    if (!this.instance) {
      this.initialize();
      this.instance = new MyConfiguration();
    }

    return this.instance;
  }

  get environment(): string {
    return MyConfiguration._environment;
  }

  get url(): string {
    return MyConfiguration._url;
  }

  get username(): string {
    return MyConfiguration._username;
  }

  get password(): string {
    return MyConfiguration._password;
  }
}
