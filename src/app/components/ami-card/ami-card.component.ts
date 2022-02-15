import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ami-card',
  templateUrl: './ami-card.component.html',
  styleUrls: ['./ami-card.component.css'],
})
export class AmiCardComponent implements OnInit {
  @Input() amigo: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verAmigo(id: string) {
    this.router.navigate(['/amigo', id]);
  }
}
