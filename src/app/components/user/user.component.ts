import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran.....');

  }

  ngOnInit() {
    console.log('ngoninit ran...');

    this.name = 'Manjil Thapa Magar';
    this.age = 25;
    this.email = 'manjil@gmail.com';
    this.address = {
      street: '735 Dulles Ave',
      city: 'Stafford',
      state: 'TX'
    };
    this.hobbies = ['live', 'football'];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onclick() {
  this.name = 'Deepika';
  this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
    console.log(hobby);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address {
    street: string;
    city: string;
    state: string;
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}
