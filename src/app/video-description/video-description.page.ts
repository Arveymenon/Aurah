import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from './../../../services/http/http.service';
import { LoadingService } from 'services/loading/loading.service';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.page.html',
  styleUrls: ['./video-description.page.scss'],
})
export class VideoDescriptionPage implements OnInit {

  protected bgImage: string;
  public segmentOption: any;
  public content: any;
  public type_id: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public http: HttpService,
    public loading: LoadingService
  ) {
  }
  
  ngOnInit() {
    this.loading.create();
    this.segmentOption = 'episodes'
    this.bgImage = 'url(../../assets/images/testmovie1.png)'
    let content_id = this.activatedRoute.snapshot.paramMap.get('content_id')
    this.type_id = this.activatedRoute.snapshot.paramMap.get('type_id')
    this.http.call('get','http://oxygen.idgafgroup.com/public/api/content/'+content_id,'').then(data=>{
      console.log(data);
      this.content = data['response'];
      this.loading.dismiss();
    },
    err=>{
      console.log(err)
      this.loading.dismiss();
    })
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.segmentOption = ev.detail.value;
  }

  unread(check){
    console.log(check)
  }

  getImagePath(json_string){
    console.log(json_string)
    // console.log(JSON.parse(json_string)[0].download_link);
    let path = JSON.parse(json_string)[0].download_link;
    return "http://oxygen.idgafgroup.com/storage/app/public/"+path;
  }

  play(subcontent_id){
    this.router.navigate(['/video-player',{subcontent_id: subcontent_id}]);
    // let options: StreamingVideoOptions = {
    //   successCallback: () => { console.log('Video played') },
    //   errorCallback: (e) => { console.log('Error streaming') },
    //   orientation: 'landscape',
    //   shouldAutoClose: true,
    //   controls: false
    // };

    // this.streamingMedia.playVideo('http://static.videogular.com/assets/videos/videogular.mp4', options);
  }

}
