import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user = {};
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.userService.showUser(id).then((res) => {
      this.user = res;
      console.log(this.user);
    }, (err) => {
      console.log(err);
    });
  }

  deleteBook(id) {
  this.userService.deleteUser(id).then((result) => {
    this.router.navigate(['/users']);
  }, (err) => {
    console.log(err);
  });
}
}

