import { Component, OnInit } from '@angular/core';

interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}
const products: Product[] = [
  { 
    code: 'gffghdh',
    name: 'bamboo wa',
    category: 'accesoris',
    quantity: 21
  }
]
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
