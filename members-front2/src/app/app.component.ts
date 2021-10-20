import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {name:'member01', id: 1, surname: 'Ciclano', photo: 'http://#1'},
    {name:'member02', id: 2, surname: 'Beltrano', photo: 'http://#2'},
    {name:'member03', id: 3, surname: 'Fulano', photo: 'http://#3'},
  ];

  selected_member = {name: '', surname: '',};

  constructor(private api:ApiService){
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
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro", error);
      }
    )
  }



}
