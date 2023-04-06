import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {


  _url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _httpClient: HttpClient) { }
  

  getDatos() {
    return this._httpClient.get(this._url);
  }
}
