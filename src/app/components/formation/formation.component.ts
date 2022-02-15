import { Component, OnInit} from '@angular/core';
import { AmiDataService } from 'src/app/services/ami-data.service';
import { Amigo } from 'src/app/models/amigos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  amiList: Amigo[] = [];
  constructor(private amiData: AmiDataService, private router: Router) { }
  
  ngOnInit(): void {
   this.amiList = this.amiData.fetchAmiList();
  }
  
}
