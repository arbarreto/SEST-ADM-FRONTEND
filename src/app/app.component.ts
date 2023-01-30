import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/services/videos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos: any = [];
  currentVideo: any = {
    id: "",
    title: "",
    description: "",
    link: "",
  };

  currentVideoIdDelete: any;

  add: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    link: new FormControl(),
  });

  edit: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    link: new FormControl(),
  });

  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((res) => {
      this.videos = res;
    });
  }


  addVideo() {
    let body = {
      title: this.add.value.title,
      description: this.add.value.description,
      link: this.add.value.link,
    }

    this.videoService.addVideo(body).subscribe((res) => {
      window.location.reload();
    });
  }

  setCurrentVideo(video: any) { this.currentVideo = video; }

  editVideo() {
    let body = {
      title: (this.edit.value.title) ? this.edit.value.title : this.currentVideo.title,
      description: (this.edit.value.description) ? this.edit.value.description : this.currentVideo.description,
      link: (this.edit.value.link) ? this.edit.value.link : this.currentVideo.link,
      views: this.currentVideo.views,
    }

    this.videoService.editVideo(body, this.currentVideo.id).subscribe((res) => {
      window.location.reload();
    });
  }

  setDeleteVideoId(id: any) { this.currentVideoIdDelete = id; }

  deleteVideo() {
    this.videoService.deleteVideo(this.currentVideoIdDelete).subscribe((res) => {
      window.location.reload();
    });
  }
}
