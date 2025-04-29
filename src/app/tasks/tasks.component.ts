import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddingTask: boolean = false
  @Input({required: true}) name!: string
  @Input({required: true}) userId!: string

  constructor(private taskService: TasksService) {

  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }

  onCompleteTaskId(id: string) {
    return this.taskService.removeTask(id)

  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCloseAddTask() {
    this.isAddingTask = false
  }

}
