import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filterPost?:string;

  constructor(private authservice:AuthService,
              private dataService:DataService) { }

  upadateFilter(data:any)
  {
     this.dataService.updatePostFilter(data.target.value);
  }

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
