import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';  

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  	// emit event
	emitSomethig() {
		this.socket.emit('emitSomethig');
	} 

	// listen event
	OnSessionData() {
		return this.socket.fromEvent('session');
	}
	OnTelemetry() {
		return this.socket.fromEvent('telemetry');
	}

}
