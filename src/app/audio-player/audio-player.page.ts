import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'services/http/http.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.page.html',
  styleUrls: ['./audio-player.page.scss'],
})
export class AudioPlayerPage implements OnInit {
  sources: Array<Object>;
  public background: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpService,
    public router: Router
  ) { 
    let subcontent_id = this.activatedRoute.snapshot.paramMap.get('subcontent_id')
    this.http.call('get','http://oxygen.idgafgroup.com/public/api/subcontent/'+subcontent_id,'').then(
      data=>{
        console.log(data);
        if(data['error'] == false){
          this.background = 'http://oxygen.idgafgroup.com/storage/app/public/'+data['response'].cover_image;
          console.log('http://oxygen.idgafgroup.com/storage/app/public/'+data['response'].video.path+'/'+data['response'].video.title)
          this.sources = [
                {
                    src: 'http://oxygen.idgafgroup.com/storage/app/public/'+data['response'].video.path+'/'+data['response'].video.title,
                    type: "audio/mp3"
                }
              ];
        }else{
          this.router.navigateByUrl('/music-list');
        }
      },
      err=>{
          console.log(err);
          this.router.navigateByUrl('/music-list');
      });
  }

  ngOnInit() {
  }

}
