import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { LoadingService } from 'services/loading/loading.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  public featured: any[];
  public content: any[];
  constructor(
    private router: Router,
    private http: HttpService,
    public loading: LoadingService
  ) { 
  }
  
  ngOnInit() {
    this.loading.create();
    this.http.call('get','http://oxygen.idgafgroup.com/public/api/movie/home','').then(data=>{
      console.log(data);
      if(data['error'] == false){
        this.featured = data['response'].featured
        this.content = data['response'].content
        console.log(this.content[0].content[0].cover_image)
        console.log(this.featured[0].logo)
        console.log(this.content[0])
        this.loading.dismiss()
      }else{
        this.router.navigateByUrl('/login');
        this.loading.dismiss()
      }
    },
    err=>{
      console.log(err);
      this.loading.dismiss()
    })
  }


  play(){
    this.router.navigate(['/video-player',{subcontent_id: this.featured[0].id}]);
  }

  goToPage(id,type) {
    this.router.navigate(['/video-description',{content_id: id, type_id: type}]);
  }

}
