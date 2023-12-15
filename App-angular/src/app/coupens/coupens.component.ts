import { Component } from '@angular/core';

@Component({
  selector: 'app-coupens',
  templateUrl: './coupens.component.html',
  styleUrls: ['./coupens.component.scss']
})
export class CoupensComponent {
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
