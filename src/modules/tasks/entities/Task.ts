import { uuid } from "uuidv4";

class Task {
  id: string;

  title:string;

  description:string;

  date:string;

  constructor(title:string, description:string, date:string){
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

export default Task;
