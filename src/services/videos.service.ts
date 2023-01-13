import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  baseUrl = 'http://localhost:3000';

  public clickContrast: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getVideos`, {});
  }

  addVideo(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createVideos`, body);
  }

  editVideo(body: any, id: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateVideo/${id}`, body);
  }

  deleteVideo(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteVideo/${id}`, {});
  }

}