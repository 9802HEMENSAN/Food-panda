import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() name : string;
  @Input() image: string;
  @Input() description : string;
  @Input() category: string;
  @Input() quantity: number;
  @Input() price: string;
  @Input() id: number;
  @Input() onAdd: any;

  constructor() {}

  ngOnInit(): void {}
}
