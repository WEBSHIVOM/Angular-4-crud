import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService} from '../services/alert.service';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user = {};
  msgs: Message[];
  constructor(private userService: UserService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    debugger;
    this.userService.saveUser(this.user).then((result) => {
      //let id = result['Id'];
      this.msgs = [{ severity: 'success', summary: 'Success', detail: 'User Created successfully' }];
      //this.router.navigate(['/users']);
    }, (err) => {
      console.log(err);
    });
  }
}

