import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../row.interface';

// don't make any changes to this component!
@Component({
  selector: 'app-heavy',
  template:
    '<h2>{{ row.title }}</h2><p>Last fetched: {{ row.lastFetched|date:"medium" }}</p><p>Total: {{ total }}</p>',
})
export class HeavyComponent implements OnInit {
  @Input() row!: Row;
  total = 0;

  ngOnInit() {
    for (let x = this.row.id; x < 20_000_000; x++) {
      this.total += Math.sqrt(x);
    }
  }
}
