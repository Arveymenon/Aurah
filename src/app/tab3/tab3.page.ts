import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'services/http/http.service';
import { LoadingService } from 'services/loading/loading.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public featured_events = [];
  public events = [];

  constructor(
    public router: Router,
    public http: HttpService,
    public loading: LoadingService
  ){
  }
  
  ngOnInit(){
    this.http.call('get','http://oxygen.idgafgroup.com/public/api/events','').then(data=>{
      this.loading.create();
      var response = data['response']
      if(data['error'] == false){
        console.log(response);
        for(let event of response){
          console.log(event.featured)
          if(event.featured == 1){
            this.featured_events.push(event)
          }else{
            this.events.push(event)
          }
        }
        this.loading.dismiss()
      }else{
        console.log(data)
        this.loading.dismiss()
      }
    },
    err=>{
      console.log(err);
      this.loading.dismiss()
    })
  }

  goToEvent(event){
    console.log(event);
    this.router.navigate(['/event',{'event_id': event.id}]);
  }
}
