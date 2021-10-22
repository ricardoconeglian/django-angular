import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api:ApiService,
    private router: Router,
    private appComponente: AppComponent,
     ) { }

  selected_member = {name: '', surname: '', id: ' ', phone: '', photo: ''};
  selected_id:any

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.loadMember(id);
      this.selected_id = id;
    });

  }

  loadMember(id:any) {

    this.api.getMember(id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro", error);
      }
    )
  }

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
          console.log("Aconteceu um erro", error);
      }
    );
  };



  delete(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
       let index:any;
       this.appComponente.members.forEach((e, i) => {
         if(e.id == this.selected_id)
          index = i;
       });

       this.appComponente.members.splice(index, 1);

      },
      error => {
          console.log("Aconteceu um erro", error);
      }
    );
  };



  newMember(){
    this.router.navigate(['new-member'])
  }

}
