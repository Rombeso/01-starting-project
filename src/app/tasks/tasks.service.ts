import {type NewTaskData} from "./new-task/new-task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'First Task',
    summary: 'First Task First Task First TaskFirst Task First Task First Task ',
    dueDate: '2025-12-31'
  },
    {
      id: 't2',
      userId: 'u3',
      title: 'Second Task',
      summary: 'First Task First Task First TaskFirst Task First Task First Task ',
      dueDate: '2025-05-11'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Third Task',
      summary: 'First Task First Task First TaskFirst Task First Task First Task ',
      dueDate: '2025-08-20'
    }]

  constructor() {
    const tasks = localStorage.getItem('tasks')

    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId)
  }

  addTask(task: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summery,
      dueDate: task.data,
      userId: userId
    })
    this.saveTasks()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => id !== task.id)
    this.saveTasks()
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
