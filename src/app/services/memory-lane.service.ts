import { Injectable } from '@angular/core';
import { Memory } from '../models/memory';

const MEMORIES: Memory[] = [
  {
    id: 1,
    src: 'http://www.youtube.com/embed/o1dKhSgM3sk',
    release_date: '01/01/2019',
    location: ['Valizas', 'Chuy'],
  },
  {
    id: 2,
    src: 'http://www.youtube.com/embed/Bid_XHCw8Vo',
    release_date: '01/01/2018',
    location: ['Valizas'],
  },
  {
    id: 3,
    src: 'http://www.youtube.com/embed/boxt-FUU4gY',
    release_date: '01/01/2017',
    location: ['Valizas', 'Cabo Polonio'],
  },
  { 
    id: 4,
    src: 'http://www.youtube.com/embed/JnjIkqxnP7A',
    release_date: '01/01/2016',
    location: ['Valizas'],
  },
  {
    id: 5,
    src: 'http://www.youtube.com/embed/e2J5w1DTFlI',
    release_date: '01/01/2015',
    location: ['Valizas', 'Cabo Polonio'],
  },
  {
    id: 6,
    src: 'http://www.youtube.com/embed/uRKWSC4CEAU',
    release_date: '01/01/2014',
    location: ['La Pedrera', 'Valizas', 'Cabo Polonio'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class MemoryLaneService {
  constructor() {}

  fetchMemories(): Memory[] {
    return MEMORIES;
  }
}
