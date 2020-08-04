import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from '../../../node_modules/protractor';
import { IonSlides } from '@ionic/angular';
import { HttpService } from 'services/http/http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
@ViewChild('mySlider', { read: IonSlides }) slides: IonSlides;
  public music: any;
  public featured_music = [];

  constructor(
    private router: Router,
    private http: HttpService
    ){
      this.http.call('get','http://oxygen.idgafgroup.com/public/api/music/home','').then(data=>{
        if(data['error'] == false){
          console.log(data);
          this.music = data['response'].content;
          this.featured_music = data['response'].featured
          console.log(this.music)
          console.log(this.featured_music)
        }
      });
  }
  
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  async musicAlbumPage(){
    this.router.navigateByUrl('/music-album');
  }
  goToAlbumList(genre_id) {
    console.log('Button Clicked');
    this.router.navigate(['/album-list',{genre_id: genre_id}]);
  }

  goToMusicList(content_id,type_id){
    console.log('Button Clicked');
    this.router.navigate(['/musiclist',{content_id: content_id, type_id: type_id}]);
  }
}