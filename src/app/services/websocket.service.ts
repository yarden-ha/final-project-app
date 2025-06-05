import { Injectable } from "@angular/core";
import { io, Socket } from 'socket.io-client';




@Injectable({ providedIn: 'root' })
export class WebSocketClient {

    websocketConnection?: Socket

    constructor() {

    }
    initConnection() {
        this.websocketConnection = io('http://localhost:3000');
        this.websocketConnection?.on('sensor-data', this.handleMessage)
        this.websocketConnection.on('connect', () => console.log('connected'));
    }

    handleMessage(data: any) {
        console.log(data);

    }
}