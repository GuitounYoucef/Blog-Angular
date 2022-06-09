import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Direction } from '@angular/cdk/bidi';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  direction: Direction = "rtl";

  loginform: FormGroup = new FormGroup(
    {
      username:new FormControl(),
      password:new FormControl()
    });
  constructor(private authservice:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.loginform.valid)
    {
    this.authservice.login(this.loginform.value).subscribe(data=>{
      console.log(data);
    });
  }
  else alert("خطأ في حجز البيانات");

  }

}
