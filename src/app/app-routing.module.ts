import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Test1Component} from './test1/test1.component';
import {Test2Component} from './test2/test2.component';
import {Test3Component} from './test3/test3.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: 'test2',
    component: Test2Component
  },
  {
    path: 'test3',
    component: Test3Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
