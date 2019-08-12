import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav: MatSidenav;

  private selectedCategoryId: string;

  constructor() {
    this.setSelectedCategory(localStorage.getItem('selectedCategory'));
  }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public setSelectedCategory(categoryId) {
    this.selectedCategoryId = categoryId;
  }

  public getCategoryId(): string {
    return this.selectedCategoryId;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle() {
    this.sidenav.toggle();
  }
}
