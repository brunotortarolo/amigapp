import { Component, OnInit } from '@angular/core';
import { AmiDataService } from 'src/app/services/ami-data.service';
import { Amigo } from 'src/app/models/amigos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
}
