import { Component, OnInit, Input} from '@angular/core';
import { Amigo } from 'src/app/models/amigos';
import { AmiStoriesService } from 'src/app/services/ami-stories.service';

@Component({
  selector: 'app-story-box',
  templateUrl: './story-box.component.html',
  styleUrls: ['./story-box.component.css']
})
export class StoryBoxComponent implements OnInit {

  story:string[] = [];
@Input() amigo: any;
  constructor(private storyService:AmiStoriesService) { }

  ngOnInit(): void {
    this.story = this.storyService.getStory().paragraphs;
  }

}
