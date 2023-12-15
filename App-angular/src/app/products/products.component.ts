import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
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
