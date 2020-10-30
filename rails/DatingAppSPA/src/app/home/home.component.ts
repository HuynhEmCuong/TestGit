import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegister = false;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValue();
  }
  registerToggle() {
    this.isRegister = true;
  }

  getValue() {
    this.http.get('http://localhost:5001/api/values').subscribe(res => {
      this.values = res;
    }, eror => {
      console.log(eror);
    });
  }

  cancelRegisterMode(cancelRegister: any) {
    this.isRegister = cancelRegister;
  }


}
