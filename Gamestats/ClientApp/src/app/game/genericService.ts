import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private httpClient : HttpClient
  private REST_API_SERVER : string;

  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = httpClient;
    this.REST_API_SERVER = baseUrl + 'api/';
  }

  public get(a: string) {
    return this.httpClient.get(this.REST_API_SERVER + a);
  }

  public put(a: string, b) {
    return this.httpClient.post(this.REST_API_SERVER + a, b)
  }

  public delete(a) {
    return this.httpClient.delete(this.REST_API_SERVER + '/' + a.id)
  }
}
