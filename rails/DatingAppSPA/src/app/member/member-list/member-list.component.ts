import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUSer();
  }

  loadUSer() {
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      this.users = res.result;
    }, error => {
      this.alertify.error(error);
    }
    );
  }
  isLoadUser(isLoad: any) {
    if (isLoad) {
      this.loadUSer();
    }
  }

}
