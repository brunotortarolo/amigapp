import { Injectable } from '@angular/core';
import { Story } from '../models/stories';

const STORIES: Story[] = [
  {
    id: 0,
    paragraphs: [
      `was a small town girl livin' in a lonely world.`,
      `took the midnight train goin' anywhere.`,
      `was also a city boy born and raised in South Detroit...`,
    ],
  },
  {
    id: 1,
    paragraphs: [
      `doesn't mind if he doesn't make the scene.`,
      `has got a daytime job and he's doing alright.`,
      `can play the Honky Tonk like anything, savin' it up for Friday night...`,
    ],
  },
  {
    id: 2,
    paragraphs: [
      `is the egg man,`,
      `is the egg man,`,
      `is the walrus!!! Goo goo g'joob...`,
    ],
  },
  {
    id: 3,
    paragraphs: [
      `is an alligator.`,
      `is a mama-papa comin' for you.`,
      `is the space invader.`,
      `will be a rock 'n' rollin' bitch for you...`,
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class AmiStoriesService {
  constructor() {}

  getStory(): Story{
    let index: number = Math.floor(Math.random() * STORIES.length );
    return STORIES[index];
  }
}
