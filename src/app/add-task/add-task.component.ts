import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() addTask: EventEmitter<any> = new EventEmitter();

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createTaskForm();
  }

  createTaskForm() {
    this.todoForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  createTask() {
    this.addTask.emit(this.todoForm.value);
    this.todoForm.reset();
  }

}
