import { Component, OnInit } from '@angular/core';
import { Task } from '../_models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidenavService } from '../_services/sidenav.service';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task = new Task();

  frequencies = ['Daily', 'Weekly', 'Weekdays', 'Monthly', 'Yearly'];

  editTaskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sidenavService: SidenavService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.task = this.sidenavService.task;
    this.createTaskEditForm();
    this.editTaskForm.valueChanges.subscribe(_ => {
      this.updateTask();
    });
  }

  createTaskEditForm() {
    this.editTaskForm = this.fb.group({
      description: [this.task.description, Validators.required],
      isCompleted: [this.task.isCompleted],
      remindDate: [this.task.remindDate],
      remindTime: [this.task.remindTime],
      dueDate: [this.task.dueDate],
      repeat: [this.task.repeat],
      notes: [this.task.notes]
    });
  }

  updateTask() {
    this.taskService.updateTask(this.task.uid, this.editTaskForm.value);
  }
}
