import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "./new-task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  @Output() close = new EventEmitter<void>()
  private taskService = inject(TasksService)

  enteredTitle = ''
  enteredSummery = ''
  enteredData = ''

  onCancelTask() {
    this.close.emit()
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summery: this.enteredSummery,
      data: this.enteredData
    }, this.userId)
    this.close.emit()
  }
}
