import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  constructor() { 
    this.items = [
      {label: '¿Quiénes somos?', icon: PrimeIcons.USERS},
      {label: 'Menú', icon: 'pi pi-fw pi-calendar'},
      {label: 'Ubicación', icon: 'pi pi-fw pi-pencil'},
      {label: 'Contáctanos', icon: 'pi pi-fw pi-file'},
  ];
  }

  ngOnInit() {
    
  }

}
