import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {name:'member01', id: 1, surname: 'Ciclano', photo: 'http://#1', phone: ''},
    {name:'member02', id: 2, surname: 'Beltrano', photo: 'http://#2', phone: ''},
    {name:'member03', id: 3, surname: 'Fulano', photo: 'http://#3', phone: ''},
  ];

  selected_member = {name: '', surname: '', phone: ''};

  constructor(private api:ApiService, private router:Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Aconteceu um erro", error);
      }
    )
  }

  memberClicked = (member:any) => {
    this.router.navigate(['member-detail', member.id])
  }



}
