export class User {
  id: string;
  email: string;

  constructor(data: any) {
    this.id = data.uid;
    this.email = data.email;
  }

}
