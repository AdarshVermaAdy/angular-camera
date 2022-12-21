import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnapshoptComponent } from './snapshopt/snapshopt.component';

const routes: Routes = [
  {path:'Snapshot' , component:SnapshoptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
