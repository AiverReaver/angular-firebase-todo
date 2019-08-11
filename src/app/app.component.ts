import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './_services/sidenav.service';
import { AuthService } from './_services/auth.service';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;
  @ViewChild(TasksComponent, { static: false })
  private tasksComponent: TasksComponent;

  constructor(
    private sidenavService: SidenavService,
    public auth: AuthService
  ) {
    // this.sidenavService.setSelectedCategory = localStorage.getItem(
    //   'selectedCategory'
    // );
  }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  changeCategory(categoryId) {
    localStorage.setItem('selectedCategory', categoryId);
    this.sidenavService.setSelectedCategory(categoryId);
    this.tasksComponent.updateTasks();
  }
}
