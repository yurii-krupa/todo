export enum TodoStatusEnum {
  active,
  archived,
  deleted,
  draft
}

export class Todo {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;
  editedAt: Date;
  status: string;

  constructor(data: any) {
    this.id = data.id as string || '';
    this.name = data.name as string;
    this.description = data.description as string || '';
    this.createdAt = new Date((Number(data.created_at) || Date.now()));
    this.editedAt = new Date((Number(data.edited_at) || Date.now()));
    this.status =  data.status || 'active';
  }

  toServerResponse() {
    return {
      name: this.name,
      description: this.description,
      created_at: this.createdAt.getTime(),
      edited_at: new Date().getTime(),
      status: this.status
    };
  }
}
