import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService} from '../services/alert.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  newUser = {};
  cols: any[];
  constructor(private userService: UserService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
    //alert('ON injhnvgbfcdxhgf');
    this.getUserList();
  }

  getUserList() {
    debugger;
    this.userService.getAllUsers().then((res) => {
      this.users = res;
      this.cols = [
        { field: 'FirstName', header: 'First Name' },
        { field: 'LastName', header: 'Last Name' },
        { field: 'UserName', header: 'User Name' },
        { field: 'Email', header: 'Email' }
      ]
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
