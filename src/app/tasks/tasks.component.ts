import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../_models/task.model';
import { TaskService } from '../_services/task.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user.model';
import { SidenavService } from '../_services/sidenav.service';
import { map } from 'rxjs/operators';

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
    private sidenavaService: SidenavService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe(
      user => {
        this.user = user;
        this.updateTasks();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateTasks() {
    if (this.user !== undefined) {
      this.tasks = this.taskService.getTask(
        this.user.uid,
        this.sidenavaService.getCategoryId()
      );
    }
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
