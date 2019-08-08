import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatExpansionModule
} from '@angular/material';

const matComponents = [
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatExpansionModule
];

@NgModule({
  imports: matComponents,
  exports: matComponents
})
export class AppMaterialModule {}
