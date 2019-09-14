import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './_services/sidenav.service';
import { AuthService } from './_services/auth.service';
import { TasksComponent } from './tasks/tasks.component';
import { CategoryService } from './_services/category.service';
import { AngularFireFunctions } from '@angular/fire/functions';

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
    public auth: AuthService,
    private categoryService: CategoryService,
    private fns: AngularFireFunctions
  ) {}

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
    // const callable = this.fns.httpsCallable('createInvitation');
    // const data = callable('test');
    // data.subscribe(a => {
    //   console.log(a);
    // });
  }

  changeCategory(categoryId) {
    localStorage.setItem('selectedCategory', categoryId);
    this.sidenavService.setSelectedCategory(categoryId);
    this.tasksComponent.updateTasks();
  }

  createCategory() {
    this.categoryService.addCategory('new list');
  }
}
