import { Component, OnInit } from '@angular/core';
import { teste } from './teste';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  name = 'daniel';

  submitted = false;
  serveCreationStatus = 'no server was created!';
  qtas:number = 0;

  powers = [
    'agua',
    'fogo',
    'terra',
    'vento'
  ]

  servidor: number = 10;

  statusServidor: string = 'offline';

  power = '';

  disableTeste = false;

  serveName = '';

  nname = '';

  verifyServe = false;

  listServers: string[] = [];

  //valor usando para mudar o type do input
  inputValue = false


  constructor() {
    setTimeout(() => {
      this.disableTeste = true;
    }, 2000);

   this.statusServidor = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }
  
  // função usada para mudar o type do input
  showPassword(){
    this.inputValue = !this.inputValue;
  }

  getStatusServe(){
    return this.statusServidor;
  }
  getColor(){
    return this.statusServidor === 'online' ? 'green' : 'offline';
  }

  onCreateServer(){
    this.verifyServe = true;
    this.serveCreationStatus = `${this.serveName} Server was created!`;
    this.listServers.push(this.serveName);
  }

  onIncrement(){
    this.qtas++; 
  }

  // para realizar o two data bying na forma de js puro
  onUpdateServeName(event: Event){
    this.serveName = (<HTMLInputElement>event.target).value;
    // console.log(this.serveName);
  }
}
