import { Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { io, Socket } from 'socket.io-client';




@Injectable({ providedIn: 'root' })
export class WebSocketClient {

    websocketConnection?: Socket

    dataSignals: Map<string, WritableSignal<string>> = new Map<string, WritableSignal<string>>();
    constructor() {

    }
    initConnection() {
        this.websocketConnection = io('http://'+window.location.hostname+':3000');
        this.websocketConnection?.on('sensor-data', this.handleMessage.bind(this))
        this.websocketConnection.on('connect', () => console.log('connected'));
    }

    handleMessage(data: { sensor: string, value: string }) {

        if (this.dataSignals.size > 0) {
            const { sensor, value } = data
            console.log({ sensor, value });
            
            try { this.dataSignals.get(sensor)?.set(value) } catch (e) {
                console.error(e);
            }
        }
    }

    async addSignal(sensorName: string) {
        if (!this.dataSignals.has(sensorName)) {
            const newSignal = signal('0');
            this.dataSignals.set(sensorName, newSignal);
        }
        return this.dataSignals.get(sensorName)!;
    }
    getSignals() {
        return this.dataSignals
    }
}