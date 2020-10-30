import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgiter',
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit {
  user: User;
  model: any = {};
  @Input() valueFormHome: any;
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, private fb: FormBuilder, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.creatRegisterForm();
    this.bsConfig = {
      containerClass: 'theme-dark-blue'
    };
  }

  creatRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      password: ['',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: [null, Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  Cancel() {
    this.cancelRegister.emit(false);
    console.log('cancel');
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };

  }

  Register() {
    if (this.registerForm.valid) {
      // tslint:disable-next-line:no-debugger
      debugger;
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('Register Success');
      }, error => {
        this.alertify.error(error);

      // }, () => {
      //   this.authService.login(this.user).subscribe(() => {
      //     this.router.navigate(['/members']);
      //   });
      });
    }
    console.log(this.registerForm.value);
  }
}
