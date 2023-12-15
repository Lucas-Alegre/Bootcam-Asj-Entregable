import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  productos = [
    {
      code: 1212,
      name: 'namProd',
      category: 'celular',
      quantity: 5,
    },
    { code: 1212, name: 'namProd', category: 'celular', quantity: 5 },
    {
      code: 1212,
      name: 'namProd',
      category: 'celular',
      quantity: 5,
    },
    ];
    
}
