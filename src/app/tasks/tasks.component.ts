import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../_models/task.model';
import { TaskService } from '../_services/task.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Observable<Task[]>;
  user: User;

  constructor(
    private taskService: TaskService,
    private afs: AngularFirestore,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      user => {
        this.user = user;
        this.tasks = this.afs
          .collection<Task>('todos', ref => ref.where('userId', '==', user.uid))
          .valueChanges({ idField: 'uid' });
      },
      err => {
        console.log(err);
      }
    );
  }

  addTask($event) {
    const data: Task = {
      userId: this.user.uid,
      description: $event.description,
      isCompleted: false
    };

    this.taskService.addTask(data);
  }
}
