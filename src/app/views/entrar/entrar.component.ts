import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userModel = new User("","","")


  onSubmit(){
    console.log(this.userModel)
  }
}
