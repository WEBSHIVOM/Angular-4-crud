import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService} from '../services/alert.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = {};
  constructor(private userService: UserService, private alertService: AlertService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id) {
    this.userService.showUser(id).then((res) => {
      this.user = res;
      console.log(this.user);
    }, (err) => {
      console.log(err);
    });
  }

  updateUser(username) {
    this.userService.updateUser(this.user).then((result) => {
      let id = result['Id'];
      this.alertService.success('User Updated successfully', true);
      this.router.navigate(['/user-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
