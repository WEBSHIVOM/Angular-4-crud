import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';
import { UserNew } from '../models/usernew';
import { UserService} from '../services/user.service';
import { AlertService} from '../services/alert.service';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { HeaderComponent } from '../common/header.component';

@Component({
    moduleId: module.id,
    selector: 'search-data',
    templateUrl: 'search.component.html',
    entryComponents:[HeaderComponent],
})

export class SearchComponent implements OnInit {
//    currentUser: User;
    model: any = {};
    userNew: any;
    //users: User[] = [];
    users: any;
    cols: any[];
    query='';
    totalCount: Observable<number> ;

    @Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;

    constructor(private http: Http, private alertService: AlertService, private router: Router,private userService: UserService) { }

 /*   search() {
        if(this.model.query !=""){
           this.userService.getByUserName(this.model.query) .subscribe(
                data => {
                    console.log("***",data)

                 this.userNew = data;
                 this.cols = [
                  { field:'Id', header: 'ID'},
                  { field: 'FirstName', header: 'First Name' },
                  { field: 'LastName', header: 'Last Name' },
                  { field: 'UserName', header: 'User Name' },
                  { field: 'Email', header: 'Email' }
                ]
                  //this.alertService.success('search successful', true);
                },
                error => {
                 this.alertService.success('search failed', true);
                });
          }else{
             // this.getUserList();
            }
    }*/


  download(){
  console.log(this.model.query);
        if(this.model.query != undefined && this.model.query !=""){
           this.userService.getByUserName(this.model.query) .then(
                data => {
                   // this.users = data;
                    let blob = new Blob([JSON.stringify(data)], { type: 'attachment;filename="test.txt" ;text/plain' });
                    FileSaver.saveAs(blob,"SearchReasult.txt");
                  this.alertService.success('search successful', true);
                },
                error => {
                 this.alertService.success('search failed', true);
                });
          }else{
this.alertService.success('nothing to download', true);}
       //let url = window.URL.createObjectURL(blob);
    //window.open(url);
      }
  ngOnInit() {

       this.cols = [
                  { field:'Id', header: 'ID'},
                  { field: 'FirstName', header: 'First Name' },
                  { field: 'LastName', header: 'Last Name' },
                  { field: 'UserName', header: 'User Name' },
                  { field: 'Email', header: 'Email' }
                ]
     if(!this.userService.searchData.isEmpty) {
          this.userNew = this.userService.searchData;
          this.totalCount = this.userNew.length;
     }else {
        console.log('No Records');
      }

    }

/*    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }*/

  getUserList() {
    this.userService.getAllUsers().then((res) => {
      this.users = res;
    }, (err) => {
      console.log(err);
    });
  }

    handleEditCell(event){
     let value = event.data;
    this.userService.updateUser(value).then((result) => {
      this.alertService.success('User Updated successfully', true);
      this.router.navigate(['/users']);
    }, (err) => {
      console.log(err);
    });
  }
}
