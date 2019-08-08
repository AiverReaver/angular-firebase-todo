import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './_services/sidenav.service';
import { AuthService } from './_services/auth.service';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  isOpened: boolean;

  constructor(
    private sidenavService: SidenavService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
