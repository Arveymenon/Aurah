import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http'; 
import { map } from 'rxjs/operators';

// import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public http: HttpClient) {
    
  }
  
  call(method, url, body){
    console.log(url);
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json,text/*;q=0.99'
    });
    return new Promise((resolve, reject) => {

      switch(method) {
        case "get": {
          console.log(url)
           this.http.get(url,{ headers })
           .subscribe((data) =>{
             resolve(data);
           },
           (error)=>{
             reject(error);
           },
         );
         break;
        }
        case 'post': {
          this.http.post(url,body,{ headers })
          .subscribe((data) =>{
            resolve(data)
          },
          (error)=>{
            reject(error);
            },
          );
          break;
        }
        case "put": {
          this.http.put(url,body,{ headers })
            .subscribe((data) =>{
              resolve(data)
            },
            (error)=>{
              reject(error);
              },
            );
           break;
        }
        case "delete": {
          this.http.delete(url,{ headers })
            .subscribe((data) =>{
              resolve(data)
            },
            (error)=>{
              reject(error);
              },
            );
           break;
        }
        default: {
           console.log("method not defined");
           reject("method not defined")
           break;
        }
     }



      // if(method == 'get'){
      //   this.http.get(body,this.option)
      //   .subscribe((data) =>{
      //     resolve(data)
      //   },
      //   (error)=>{
      //     reject(error);
      //   },
      // );
      // }else if(method == 'post'){

      // }else if(method == 'put'){

      // }else if(method == 'delete'){

      // }
    });
  }

}
