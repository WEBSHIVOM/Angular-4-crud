import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { AlertService} from '../services/alert.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: any = {};
  loading = false;
  returnUrl: string;

  constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        ) { }

  ngOnInit() {
    // this.authenticationService.logout();
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
    login() {
debugger;
        this.loading = true;
       // console.log(this.user);
           // this.userService.authenticateUser(this.user).then((res) => {
              //this.user = res;
              this.alertService.success('User Logged In', true);

              this.router.navigate(['/users']);
          // }, (err) => {
            //   console.log(err);
          //});
        }//
}
