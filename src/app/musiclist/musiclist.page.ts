import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'services/http/http.service';



@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.page.html',
  styleUrls: ['./musiclist.page.scss'],
})
export class MusiclistPage implements OnInit {
  public type_id: any;
  public title: any;
  public album: any;
  
  constructor(
    public popoverController: PopoverController,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public http: HttpService
    ) {
      let content_id = this.activatedRoute.snapshot.paramMap.get('content_id');
      this.http.call('get','http://oxygen.idgafgroup.com/public/api/content/'+content_id,'').then(data=>{
        console.log(data);
          if(data['error'] == false){
            this.album = data['response'].episodes;
            this.title = data['response'].title;
            this.type_id = data['response'].type_id
          }else{
            this.router.navigateByUrl('/tabs/tab2');
          }
      })
    }  

  ngOnInit() {
  }

  playMusic(id){
    console.log(id)
    if(this.type_id == 4){
      this.router.navigate(['/audio-player',{subcontent_id: id}])
    }else{
      this.router.navigate(['/video-player',{subcontent_id: id}])
    }
  }

}
