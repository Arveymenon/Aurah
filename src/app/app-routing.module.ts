import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VideoDescriptionPage } from './video-description/video-description.page';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { 
    path: 'landing',
    loadChildren: './landing-page/landing-page.module#LandingPagePageModule'
  },
  { 
    path: 'login', 
    loadChildren: './login-page/login-page.module#LoginPagePageModule' 
  },
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { 
    path: 'video-description', 
    loadChildren: './video-description/video-description.module#VideoDescriptionPageModule' 
  },
  { path: 'music-album', loadChildren: './music-album/music-album.module#MusicAlbumPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { 
    path: 'event', 
    loadChildren: './event/event.module#EventPageModule'
  },
  { 
    path: 'musiclist', loadChildren: './musiclist/musiclist.module#MusiclistPageModule' 
  },
  {
     path: 'album-list', loadChildren: './album-list/album-list.module#AlbumListPageModule' 
    },
  { path: 'video-player', loadChildren: './video-player/video-player.module#VideoPlayerPageModule' },
  { path: 'audio-player', loadChildren: './audio-player/audio-player.module#AudioPlayerPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'request-booking', loadChildren: './request-booking/request-booking.module#RequestBookingPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
