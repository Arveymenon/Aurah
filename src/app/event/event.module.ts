import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventPage } from './event.page';

const routes: Routes = [
  {
    path: '',
    component: EventPage
  }
];

@NgModule({
  declarations: [EventPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
})
export class EventPageModule {}
