import { Component, OnInit } from '@angular/core';
import { MemoryLaneService } from 'src/app/services/memory-lane.service';

@Component({
  selector: 'app-memory-lane',
  templateUrl: './memory-lane.component.html',
  styleUrls: ['./memory-lane.component.css']
})
export class MemoryLaneComponent implements OnInit {
  memories: any[] = [];
  constructor(private memoryList:MemoryLaneService) { }

  ngOnInit(): void {
    this.memories = this.memoryList.fetchMemories();
    console.log(this.memories)
  }

}
