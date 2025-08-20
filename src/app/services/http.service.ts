import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  testGet(){
    return this.httpClient.get(window.location.protocol + '//' + window.location.hostname + ':3000/')
  }
  initGetSensor(){
    return this.httpClient.get(window.location.protocol + '//' + window.location.hostname + ':3000/force')

  }
  getGraphData(graphName: string){
    const apiBase = window.location.protocol + '//' + window.location.hostname + ':3000';
    return this.httpClient.get(apiBase + '/files/' + graphName)
  }
  initMotor(){
    return this.httpClient.get(window.location.protocol + '//' + window.location.hostname + ':3000/motor')

  }
  stopMotor(){
    return this.httpClient.get(window.location.protocol + '//' + window.location.hostname + ':3000/stop/motor')

  }
  tareScale(){
    return this.httpClient.get(window.location.protocol + '//' + window.location.hostname + ':3000/tare/force')
  }
}
