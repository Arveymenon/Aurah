// import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';

// import { VgAPI } from 'videogular2/core';
// import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

// declare var vgHls;

import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { HttpService } from 'services/http/http.service';

import { BitrateOption, VgAPI } from 'videogular2/core';
// import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';
import { IDRMLicenseServer } from 'videogular2/streaming';
import { VgDASH } from 'videogular2/src/streaming/vg-dash/vg-dash';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

export interface IMediaStream {
    type: 'vod' | 'dash' | 'hls';
    source: string;
    label: string;
    token?: string;
    licenseServers?: IDRMLicenseServer;
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})

export class VideoPlayerPage implements OnInit {
  // @ViewChild(VgHLS) vgHls: VgHLS;
  // num: number;
  // streamUrl: string;
  // // currentStream: Stream = new Stream(0, '', '', 0, 0);
  // isFav: boolean;
  // api: VgAPI;

  // constructor(public activatedRoute: ActivatedRoute,
  //   public http: HttpService) { }

  // onPlayerReady(api: VgAPI) {
  //   this.api = api;
  //   console.log(this.api)
  //   // this.vgHls.
  // }
  
  // ionViewWillLeave() {
  //   // console.log(this.vgHls.hls.getMediaSource());
  //   this.vgHls.hls.stopLoad();
  //   this.api.pause();
  // }
  
  // ngOnInit() {
  //    let subcontent_id = this.activatedRoute.snapshot.paramMap.get('subcontent_id')
  //     this.http.call('get','http://oxygen.idgafgroup.com/public/api/subcontent/'+subcontent_id,'').then(data=>{
  //       console.log(data);
  //       this.streamUrl = 'http://oxygen.idgafgroup.com/storage/app/public/converted_files/'+data['response'].video.path+'/m3u8/'+data['response'].video.stream_path+'.m3u8';
  //       console.log(this.streamUrl);
  //     },
  //     err=>{
  //       console.log(err)
  //     })
   
  // }

  @ViewChild(VgDASH) vgDash: VgDASH;
  @ViewChild(VgHLS) vgHls: VgHLS;

    currentStream: IMediaStream;
    api: VgAPI;

    bitrates: BitrateOption[];
    
    // source: 'http://oxygen.idgafgroup.com/storage/app/public/converted_files/episodes/May2019/m3u8/bdyLAS16VOaiDkAe.m3u8'
    streams: IMediaStream[] = [
        {
            type: 'hls',
            label: 'HLS: Streaming',
            source: 'http://oxygen.idgafgroup.com/storage/app/public/converted_files/episodes/May2019/m3u8/KkMpAoPCpo6hlkrn.m3u8'
        },
        {
            type: 'vod',
            label: 'VOD',
            source: 'http://static.videogular.com/assets/videos/videogular.mp4'
        },
    ];

    constructor(public activatedRoute: ActivatedRoute, public http: HttpService) {
        // this.currentStream = this.streams[0];
        console.log("CURRENT STREAM", this.currentStream);  
        let subcontent_id = this.activatedRoute.snapshot.paramMap.get('subcontent_id')
        this.http.call('get','http://oxygen.idgafgroup.com/public/api/subcontent/'+subcontent_id,'').then(data=>{
            console.log(data);
            console.log(data['response'].video.stream_path.replace(/\s/g, ""));
            this.streams[0].source = 'http://oxygen.idgafgroup.com/storage/app/public/converted_files/'+data['response'].video.path+'/m3u8/'+data['response'].video.stream_path.replace(/\s/g, "")+'.m3u8';
            // this.streams[0].source = 'http://localhost:8888/original-oxygen-api/storage/app/public/converted_files/episodes/May2019/m3u8/ANMLnwCrzS2T5699.m3u8';
            console.log(this.streams);
            this.currentStream = this.streams[0];
        },
        err=>{
            console.log(err)
        })
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;
    }

    ngOnInit() {
        
    }

    setBitrate(option: BitrateOption) {
        switch (this.currentStream.type) {
            case 'dash':
                this.vgDash.setBitrate(option);
                break;

            case 'hls':
                this.vgHls.setBitrate(option);
                break;
        }
    }

    onClickStream(stream: IMediaStream) {
        this.api.pause();
        console.log(this.streams)
        this.bitrates = null;
        this.currentStream = stream;

        // let timer: Subscription = TimerObservable.create(0, 10).subscribe(
        //     () => {
        //       timer.unsubscribe();
        //     }
        // );
    }

}
