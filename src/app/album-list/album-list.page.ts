import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'services/http/http.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.page.html',
  styleUrls: ['./album-list.page.scss'],
})
export class AlbumListPage implements OnInit {
  public album: any;
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public http: HttpService
    ) { }

  ngOnInit() {
    let genre_id = this.activatedRoute.snapshot.paramMap.get('genre_id');
    this.http.call('get','http://oxygen.idgafgroup.com/public/api/genre/album/get/'+genre_id,'').then(
      data=>{
        console.log(data);
        if(data['error'] == false){
          this.album = data['response'];
        }
    })
  }

  goToMusicList(content_id) {
    console.log('Button Clicked');
    console.log(content_id)
    this.router.navigate(['/musiclist',{content_id: content_id }]);
  }

}
