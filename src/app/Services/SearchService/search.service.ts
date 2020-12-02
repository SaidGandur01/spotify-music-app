import { Observable } from 'rxjs';
import { global } from './../../Helpers/global';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public clientId: string;
  public artistsUrl: string;
  public token: string;

  constructor(private http: HttpClient) {
    this.clientId = global.clientId;
  }

  public setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  public getTokenSetted() {
    let token = JSON.parse(localStorage.getItem('token'));

    if (token && token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  public searchTrack(searchTerm: string, token: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let url = 'https://api.spotify.com/v1/search?query='+searchTerm+'&offset=0&limit=10&type=track';
    return this.http.get(url, {headers: headers});
  }

  public getToken(): Observable<any> {
    let url = 'https://accounts.spotify.com/api/token';
    let params = 'grant_type=client_credentials'
    let headers = new HttpHeaders({
      'Authorization': 'Basic '+ global.base64encoded,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(url,  params  , {headers: headers});
  }

  public getCurrentUser(token: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'scope':'said'
    });
    let url = 'https://api.spotify.com/v1/me';
    return this.http.get(url, {headers: headers});
  }
}
