import { Component, OnInit } from '@angular/core';
import {UserModel} from './../UserModel';
import {UsersService} from './../users.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: UserModel[];
  constructor(private usersService:UsersService, private router: Router) {
    this.getAll()
   }
  getAll(){
    this.usersService.getAllUsers().subscribe(
      data => this.users = data
    );
  }

  deleteUser(id){
    this.usersService.deleteUserById(id).subscribe();
    this.router.navigateByUrl('/del', {skipLocationChange: true}).then(()=> this.router.navigate(['']))
  }

  ngOnInit() {
    this.getAll()
  }

}
