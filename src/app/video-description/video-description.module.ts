import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoDescriptionPage } from './video-description.page';

const routes: Routes = [
  {
    path: '',
    component: VideoDescriptionPage
  }
];

@NgModule({
  declarations: [VideoDescriptionPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class VideoDescriptionPageModule {}
