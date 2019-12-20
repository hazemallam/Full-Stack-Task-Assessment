import { Component, OnInit } from '@angular/core';
import {UserModel} from './../UserModel';
import {UsersService} from './../users.service';
import { ActivatedRoute, Router} from '@angular/router';
import {ContactModel} from './../ContactModel';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: UserModel;
  users:ContactModel[];
   
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  getUser(){
    const id = this.route.snapshot.params.id;
    
    this.usersService.getUserById(id).subscribe(data=> this.user = data)

  }
  
  getContacts(){
    const id = this.route.snapshot.params.id;
    this.usersService.getContactsById(id).subscribe(data=>{
      console.log(data)
      this.users=data
    })
  }
  deleteContact(id){
    const userID = this.route.snapshot.params.id;
    this.usersService.deleteContactById(id).subscribe();
    this.router.navigateByUrl('/anything', {skipLocationChange: true}).then(()=> this.router.navigate([userID]))
  }

  ngOnInit() {
    this.getUser()
    this.getContacts()
   
    
  }

}
