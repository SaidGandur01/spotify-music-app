export class User {
  constructor(
    public nombres: string,
    public apellidos: string,
    public email: string,
    public password: string,
    public rememberToken: boolean
  ) {}
}