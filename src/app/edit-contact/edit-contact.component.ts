import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
import {Router, ActivatedRoute} from '@angular/router'
import {ContactModel} from './../ContactModel';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  user: ContactModel;
  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  getContact(){
    const id= this.route.snapshot.params.id;
    this.usersService.getContactById(id).subscribe(data => this.user = data)
  }
  

  ngOnInit() {
    this.getContact()
    
  }
 
  editMyContact(myUpdatedData){
    const id = this.route.snapshot.params.id;
    this.usersService.getContactById(id).subscribe(
      data => {
        this.user = data
        this.usersService.updateContactById(id, myUpdatedData).subscribe()
      }
      
      
    )
    
    console.log(this.user)
  
    this.router.navigate([''])
      
  }

}
