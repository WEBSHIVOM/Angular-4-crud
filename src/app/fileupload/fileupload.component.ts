import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AlertService} from '../services/alert.service';
import { UserService} from '../services/user.service';
import {Message} from 'primeng/primeng';


@Component({
    moduleId: module.id,
    templateUrl: 'fileupload.component.html',
    selector: 'app-fileupload'




})

export class FileUploadComponent  {
//    currentUser: User;
//    users: User[] = [];
//
//    constructor(private userService: UserService) {
//        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
//    }
value: number = 0;
msgs: Message[];

    constructor(private http: Http, private alertService: AlertService, private router: Router,private userService: UserService) { }
uploadedFiles: any[] = [];

    onUpload(event) {

        for(let file of event.files) {

debugger;

          this.msgs = [];
      for (let i = 0; i < event.files.length; i++){
                      this.msgs.push({severity: 'info', summary: 'Uploaded', detail:event.files[i].name+'files'});
                 }
            this.uploadedFiles.push(file);

         let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if(this.value >= 100) {
                this.value = 100;
                clearInterval(interval);
            }
        },22);

        }


    }




}
