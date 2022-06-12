import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  isAuth(){
    return this.authservice.isAuthenticated();
  }

  logout(){
    this.authservice.logout();
  }
  getUserName(){
    return this.authservice.getUserName();
  }

}
