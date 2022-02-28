import { Component, OnInit, OnDestroy } from '@angular/core';

import { AmiDataService } from 'src/app/services/ami-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amigo-page',
  templateUrl: './amigo-page.component.html',
  styleUrls: ['./amigo-page.component.css']
})
export class AmigoPageComponent implements OnInit, OnDestroy{
amigo: any;
index: number = 0;
interval: any;

  constructor(private amiService: AmiDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params =>{ 
     this.amigo = this.amiService.fetchSingleAmi(params['id'])
     this.interval = setInterval(()=>{
       this.index !== 4? this.index++: this.index = 0;
     }, 10000)
   })
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }



}
