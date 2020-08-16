import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private httpClient : HttpClient
  private REST_API_SERVER : string;

  constructor(httpClient: HttpClient,  @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = httpClient;
    this.REST_API_SERVER = baseUrl + 'api/player';
  }

  public get(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public put(a) {
    return this.httpClient.post(this.REST_API_SERVER, a)
  }
}
