import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents=[]
  constructor(private _eventService:EventsService,
    private _router:Router) { }

  ngOnInit() {
    this._eventService.getSpecialUser()
    .subscribe(
      res =>this.specialEvents =res,
      //err =>console.log(err)
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      }
     
    )
  }

}
