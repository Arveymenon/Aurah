import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'services/http/http.service';
import { LoadingService } from 'services/loading/loading.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public artists: any;

  constructor(
    public router: Router,
    public http: HttpService,
    public loader: LoadingService
  ) { }

  ngOnInit() {
    this.loader.create()
    this.http.call('get','http://oxygen.idgafgroup.com/public/api/member/all','').then(data=>{
      console.log(data)
      if(data['error']== false){
        this.artists = data['response']
        this.loader.dismiss()
      }else{
      }
    },
    err=>{
      console.log(err)
      this.loader.dismiss()
      this.router.navigate(['/tabs/tab1'])
      })
  }

  requestBooking(artist_id){
    this.router.navigate(['/request-booking',{id: artist_id}])
  }

}
