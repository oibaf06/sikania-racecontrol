import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/interfaces/ISession';  

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: [ './session-info.component.scss']
})
export class SessionInfoComponent implements OnInit {

  @Input() session: Session | undefined

  constructor() { }

  ngOnInit(): void {
    
  }

}
