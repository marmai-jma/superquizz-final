/**
 * @file
 * A user logged into the application.
 */
export class User {
  name: string;
  email: string;
  photo: string;
  active: boolean;

  constructor(options: {
    name: string;
    email: string;
    photo?: string;
    active?: boolean;
  }) {
    this.name = options.name;
    this.email = options.email;
    this.photo = options.photo || '';
    this.active = options.active === undefined ? true : options.active;
  }
}
