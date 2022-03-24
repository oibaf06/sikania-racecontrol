import { Component, Input, OnInit } from '@angular/core';
import { WeekendInfo } from 'src/app/interfaces/ISession';  

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: [ './session-info.component.scss']
})
export class SessionInfoComponent implements OnInit {

  @Input() weekendInfo: WeekendInfo | undefined

  constructor() { }

  ngOnInit(): void {
    
  }

}
