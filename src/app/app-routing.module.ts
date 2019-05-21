import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormViewerComponent } from './form-viewer/form-viewer.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlsModule } from './form-controls/form-controls.module';

const routes: Routes = [{
  path: '',
  component: FormViewerComponent
}];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormControlsModule,
    RouterModule.forRoot(routes),

  ],
  exports: [
    MaterialModule,
    RouterModule
  ],
  declarations: [
    FormViewerComponent
  ]
})
export class AppRoutingModule { }
