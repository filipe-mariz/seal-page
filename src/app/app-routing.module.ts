import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SealPageComponent } from 'src/app/seal-page/seal-page.component';

const routes: Routes = [
  { path: '', component: SealPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
