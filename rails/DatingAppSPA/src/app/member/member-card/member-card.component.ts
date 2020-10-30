import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  @Output() isLoad = new EventEmitter();

  constructor(private userService: UserService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(next => {
      this.alertify.success('Delete user success');
      this.isLoad.emit(true);
    }, error => {
      console.log(error);
      this.alertify.error('Delete faild');
    });
  }
}


