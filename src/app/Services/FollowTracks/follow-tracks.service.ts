import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FollowTracksService {

  constructor(private http: HttpClient) { }

  public addTrack(track: any, token: string): Observable<any> {
    let params = new HttpParams()
      .set('ids', track);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let url = 'https://api.spotify.com/v1/me/tracks?ids=' + track;
    return this.http.put(url, params.toString(), { headers: headers });
  }

  public getFavoriteTracks(token: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let url = 'https://api.spotify.com/v1/me/tracks?limit=15';
    return this.http.get(url, { headers: headers });
  }

  public removeTracks(id: string, token: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let url = 'https://api.spotify.com/v1/me/tracks?ids='+id;
    return this.http.delete(url, { headers: headers });
  }
}