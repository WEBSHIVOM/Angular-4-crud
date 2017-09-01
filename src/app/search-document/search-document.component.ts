import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Message } from 'primeng/primeng';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
@Injectable()
export class SearchDocumentComponent implements OnInit {
  searchdoc: any = {};
  searchdata: any;
  cols: any[];
  msgs: Message[];
  constructor(private http: Http, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.cols = [
      { field: 'Name', header: 'First Name' },
      { field: 'Id', header: 'Id' },
      { field: 'Description', header: 'Description' },
      { field: 'AuthorId', header: 'AuthorId' }
    ];

  }

  searchMetadata(event) {
    debugger;
    console.log(this.searchdoc)
    this.userService.searchdoc(this.searchdoc).then((res) => {
      this.searchdata = res;
      console.log(this.searchdata);
    }, (err) => {
      console.log(err);
      this.msgs = [{ severity: 'error', summary: 'error', detail: 'Within else!' }];
    });
  }


}
