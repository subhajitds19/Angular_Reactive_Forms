import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

const routes: Routes = [
  {path:'form', component:ReactiveFormComponent},
  {path:'form2', component:FormBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
