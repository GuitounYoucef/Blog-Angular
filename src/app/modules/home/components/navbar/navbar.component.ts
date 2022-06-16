import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { PasswordUpdateComponent } from '../password-update/password-update.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filterPost?:string;

  constructor(private authservice:AuthService,
              private dataService:DataService,
              private dialog: MatDialog) { }

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

  ChangePassword(){
    this.editPost();

  }
  
  editPost(){
    this.dialog.open(PasswordUpdateComponent, {
      width:'400px',

    }).afterClosed().subscribe(val =>{
      if(val==='update'){
        
      }
    });
  }

}
