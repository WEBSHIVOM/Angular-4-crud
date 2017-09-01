import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserNew } from '../models/UserNew';
import 'rxjs/add/operator/map';

@Injectable()
export class MetadataService {

  constructor(private http: Http) { }
getMetadata() {
    return new Promise((resolve, reject) => {
      this.http.get('http://10.120.57.17:8080/api/document')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
