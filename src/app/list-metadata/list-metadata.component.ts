import { Component, OnInit } from '@angular/core';
import { document } from '../models/metadataModel';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { AlertService} from '../services/alert.service';
import {Message} from 'primeng/primeng';
import {MetadataService} from '../services/metadata.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-metadata',
  templateUrl: './list-metadata.component.html',
  styleUrls: ['./list-metadata.component.css']
})
export class ListMetadataComponent implements OnInit {
metadatalist:any;
cols:any[];
  constructor(private http: Http, private alertService: AlertService, private router: Router,private userService: UserService,private metadataservice: MetadataService) {
}

  ngOnInit() {
    debugger;
    this.getallmetadata();
  }

  getallmetadata(){
this.userService.getMetadata().then((res) => {
       debugger;
      console.log(res);
      this.metadatalist=res;
      this.cols = [
        { field: 'Name', header: 'First Name' },
        { field: 'Id', header: 'Id' },
        { field: 'Description', header: 'Description' },
        { field: 'AuthorId', header: 'AuthorId' },
        { field: 'DocumentPath', header: 'DocumentPath' }];
    }, (err) => {
      console.log(err);
    });


  }

}
