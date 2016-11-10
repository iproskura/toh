import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class RaceServiceWithHttp{
  constructor(private http: Http){}

  list(){
    return this.http.get('/api/races');
  }
}