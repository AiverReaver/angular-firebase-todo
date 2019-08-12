import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Task } from '../_models/task.model';
import { TaskService } from '../_services/task.service';
import { SidenavService } from '../_services/sidenav.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

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

  showEdit() {
    this.taskService.setSelectedTask = this.task;
    this.sidenavService.open();
  }
}
