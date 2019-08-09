import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Task } from '../_models/task.model';
import { TaskService } from '../_services/task.service';
import { SidenavService } from '../_services/sidenav.service';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() isLast: boolean;
  @ViewChild(EditTaskComponent, { static: true }) child: EditTaskComponent;

  isOpend = false;

  isCompleted: boolean;

  constructor(
    private taskService: TaskService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {}

  onToogle(isChecked) {
    this.task.isCompleted = isChecked.checked;
    this.taskService.updateTask(this.task.uid, this.task);
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.uid);
  }

  updateTask() {
    this.taskService.updateTask(this.task.uid, this.child.editTaskForm.value);
  }

  showEdit() {
    this.sidenavService.task = this.task;
    this.sidenavService.toggle();
  }
}
