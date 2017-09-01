import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserNew } from '../models/usernew';
import { UserService} from '../services/user.service';
import { Message } from 'primeng/primeng';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //entryComponents: [SearchComponent],
})
export class HeaderComponent implements OnInit {

  userNew: any ={};
  cols: any[];
  msgs: Message[];
  query:any ={};
  searchTerm="";
  searchBy="";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

      performSearch(searchTerm: HTMLInputElement, searchBy: HTMLInputElement): void {
        this.query[searchBy.value] = searchTerm.value;
        if(searchTerm.value !="" && searchBy.value !=""){
                   this.userService.getByUserName(this.query) .then(
                data => {
                   
                 this.userNew = data; 
                 //console.log(this.userNew);
                 this.userService.searchData = this.userNew; 
                 //console.log(this.userService.searchData);
                 this.cols = [
                  { field:'Id', header: 'ID'},
                  { field: 'FirstName', header: 'First Name' },
                  { field: 'LastName', header: 'Last Name' },
                  { field: 'UserName', header: 'User Name' },
                  { field: 'Email', header: 'Email' }
                ]
                  this.router.navigate(['/search']);
                  //this.alertService.success('search successful', true);
                },
                error => {
                  console.log(error);
                  this.query='';
                  this.msgs = [{ severity: 'error', summary: 'error', detail: 'Something goes wrong!' }];
                });
          }else{
            this.query='';
              this.msgs = [{ severity: 'error', summary: 'error', detail: 'Within else!' }];
            }
      }

      ngOnDestroy() {
        console.log(this.userNew);
        this.userService.searchData = this.userNew; 
      }
}
