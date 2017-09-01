import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserNew } from '../models/UserNew';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';



@Injectable()
export class UserService {
	searchData = new EventEmitter<any>();
  constructor(private http: Http) { }



   searchedData(value: any) {
    this.searchData.emit(value);
  }
  getAllUsers() {
    debugger;
    return new Promise((resolve, reject) => {
      this.http.get('http://10.120.57.17:8080/api/user')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
   getAuthors() {
    debugger;
    return new Promise((resolve, reject) => {
      this.http.get(' http://10.120.57.17:8080/api/user?RoleId=1')
        .map(res => res.json())
        .subscribe(res => {
          let sud =res;

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getroles() {
    debugger;
    return new Promise((resolve, reject) => {
      this.http.get('http://10.120.57.17:8080/api/role/GetRoles')
        .map(res => res.json())
        .subscribe(res => {
          let sud =res;

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getByUserName(query: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
        this.http.post('http://10.120.57.122:8090/api/user/SearchUser', query, options)
        .map((res) => res.json()).share()
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  uploadFile(formData: FormData) {
    return this.http.post('http://10.120.57.17:8080/api/user/FileUpload', formData).map((response: Response) => response.json());
  }

  showUser(id) {
    return new Promise((resolve, reject) => {
      this.http.get('http://10.120.57.17:8080/api/user?id=' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  authenticateUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/user/userauth', data)
        .map((res: Response) => {
          let user = res.json();
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        })
        .subscribe(res => {
          resolve(Response);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://10.120.57.17:8080/api/user/PostUser', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://10.120.57.17:8080/api/user/UpdateUser', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/user/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

saveMetadata(data: FormData) {
  debugger;
  console.log(data);
   return new Promise((resolve, reject) => {
      this.http.post('http://10.120.57.17:8080/api/document/PostFileWithData',data)
        .map(res => res)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

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
  searchdoc(query){
    debugger;
    return new Promise((resolve, reject) => {
      this.http.post('http://10.120.57.17:8080/api/document/SearchDocument',query)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });


  }
  }


