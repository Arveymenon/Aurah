import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'services/http/http.service';

import { DatePipe } from '@angular/common'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  public event: any;
  public images: any[];

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public http: HttpService,
    public datepipe: DatePipe,
    public alertController: AlertController
  ) {
  }
  
  ngOnInit() {
    let event_id = this.route.snapshot.paramMap.get('event_id');
    this.http.call('get','http://oxygen.idgafgroup.com/public/api/event/'+event_id,'').then(data=>{
      console.log(data);
      if(data['error'] == false){
        this.event = data['response'];
        this.images = JSON.parse(this.event.images);
        console.log(this.event);
      }else{
        this.router.navigateByUrl('tabs/tab1');
      }
    })
  }

  getTags(string){
    let tags = string.split(',')
    console.log(tags);
    return tags.join(" | ");
  }
  
  getDate(date){
    let latest_date = this.datepipe.transform(date, 'd LLL');
    return latest_date;
  }
  
  getTime(time){
    let latest_time = this.datepipe.transform(time, 'h:m aa');
    return latest_time;
  }

  async book(messages: any){
      // var shown_message: any;
      // for(var message of messages){
      //   shown_message = message[1][0];
      // }
      const alert = await this.alertController.create({
        message: 'Your Have Booked Your Pass For This Event',
        buttons: ['OK']
      });
  
      await alert.present();
  }

}
 