import Task from "../entities/Task";

class TasksRepository {
  private tasks:Task[];

  constructor() {
    this.tasks = [];
  }

  public create(title:string, description:string, date:string):Task {
    const task = new Task(title, description, date);

    this.tasks.push(task);

    return task;
  }

  public all():Task[] {
    return this.tasks;
  }
}

export default TasksRepository;
