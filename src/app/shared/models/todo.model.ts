export class Todo {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
  editedAt: Date;

  constructor(data: any) {
    this.id = data.id as string || '';
    this.name = data.name as string;
    this.description = data.description as string || '';
    this.createdAt = new Date(data.created_at as number) || new Date();
    this.editedAt = new Date(data.edited_at as number) || new Date();
  }

  toServerResponse() {
    return {
      name: this.name,
      description: this.description,
      created_at: this.id ? this.createdAt.getTime() : new Date().getTime(),
      edited_at: new Date().getTime()
    };
  }
}
