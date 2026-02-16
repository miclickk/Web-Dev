import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  starsCount(rating: number): number[] {
    const filled = Math.round(Math.max(0, Math.min(5, rating)));
    return Array.from({ length: 5 }, (_, i) => (i < filled ? 1 : 0));
  }
}
