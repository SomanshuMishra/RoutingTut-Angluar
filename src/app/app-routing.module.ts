import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CourseComponent} from './components/course/course.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogComponent} from './components/blog/blog.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
