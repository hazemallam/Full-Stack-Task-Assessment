import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { UsersService} from './../users.service';
import { UserModel} from './../UserModel';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserModel={_id:'', name:'', age:0 ,password:'', email:''};
  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

 

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    const id= this.route.snapshot.params.id;
    this.usersService.getUserById(id).subscribe(data => this.user = data)
  }

  editMyUser(myUpdatedData){
    const id = this.route.snapshot.params.id;
    this.usersService.getUserById(id).subscribe(
      data => {
        this.user = data
        this.usersService.updateUserById(id, myUpdatedData).subscribe()
      }
      
      
    )
    
    console.log(this.user)
    this.router.navigate([''])
      console.log()
  }

}
