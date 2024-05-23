export interface TaskPrimitives {
  id: string;
  title: string;
  isDone: boolean;
}

export class Task {
  id: string;
  title: string;
  isDone: boolean;
  constructor(primitives: TaskPrimitives) {
    this.id = primitives.id;
    this.title = primitives.title;
    this.isDone = primitives.isDone;
  }

  static fromPrimitives(primitives: TaskPrimitives): Task {
    return new Task(primitives);
  }

  toPrimitives(): TaskPrimitives {
    return {
      id: this.id,
      title: this.title,
      isDone: this.isDone,
    };
  }
}
