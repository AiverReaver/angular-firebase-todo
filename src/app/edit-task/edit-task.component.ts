import { Component, OnInit } from '@angular/core';
import { Task } from '../_models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task;

  frequencies = ['Daily', 'Weekly', 'Weekdays', 'Monthly', 'Yearly'];

  editTaskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit() {
    this.createTaskEditForm();

    this.taskService.getSelectedTask.subscribe(task => {
      this.editTaskForm.setValue({
        description: task.description,
        isCompleted: task.isCompleted,
        remindDate: task.remindDate || '',
        remindTime: task.remindTime || '',
        dueDate: task.dueDate || '',
        repeat: task.repeat || '',
        notes: task.notes || ''
      });

      this.task = task;
    });
  }

  createTaskEditForm() {
    this.editTaskForm = this.fb.group({
      description: ['', Validators.required],
      isCompleted: [false],
      remindDate: [''],
      remindTime: [''],
      dueDate: [''],
      repeat: [''],
      notes: ['']
    });
  }

  updateTask() {
    this.taskService.updateTask(this.task.uid, this.editTaskForm.value);
  }
}
