import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Велосипед Petava BMX',
      description: 'Велосипед Petava BMX-3 PT-216S 2023 19.5 дюймов черный',
      price: 68000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p4f/42747506.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p40/p4c/42747511.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p4b/42747514.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/p4b/42747517.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/velosiped-petava-bmx-3-pt-216s-20-djuim-2023-19-5-djuimov-chernyi-112591119/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 2,
      name: 'Ластик)',
      description: 'Ластик Maped Technic Duo 511710, 1 шт',
      price: 10,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h74/86018938077214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/ha5/86587902820382.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 3,
      name: 'Кофемашина Delonghi',
      description: 'Кофемашина Delonghi ECAM220.50.BG бежевый',
      price: 229000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/pc9/90352567.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pda/pc6/90352572.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-ecam220-50-bg-bezhevyi-145399057/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 4,
      name: 'Product 4 (replace)',
      description: '2-3 sentences description. Replace with real text from product.',
      price: 55990,
      rating: 4.9,
      image: 'https://via.placeholder.com/600x450?text=Product+4',
      images: [
        'https://via.placeholder.com/200?text=4-1',
        'https://via.placeholder.com/200?text=4-2',
        'https://via.placeholder.com/200?text=4-3',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 5,
      name: 'Product 5 (replace)',
      description: '2-3 sentences description. Replace with real text from product.',
      price: 8990,
      rating: 4.0,
      image: 'https://via.placeholder.com/600x450?text=Product+5',
      images: [
        'https://via.placeholder.com/200?text=5-1',
        'https://via.placeholder.com/200?text=5-2',
        'https://via.placeholder.com/200?text=5-3',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 6,
      name: 'Product 6 (replace)',
      description: '2-3 sentences description. Replace with real text from product.',
      price: 25990,
      rating: 4.4,
      image: 'https://via.placeholder.com/600x450?text=Product+6',
      images: [
        'https://via.placeholder.com/200?text=6-1',
        'https://via.placeholder.com/200?text=6-2',
        'https://via.placeholder.com/200?text=6-3',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 7,
      name: 'Product 7 (replace)',
      description: '2-3 sentences description. Replace with real text from product.',
      price: 44990,
      rating: 4.6,
      image: 'https://via.placeholder.com/600x450?text=Product+7',
      images: [
        'https://via.placeholder.com/200?text=7-1',
        'https://via.placeholder.com/200?text=7-2',
        'https://via.placeholder.com/200?text=7-3',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 8,
      name: 'Product 8 (replace)',
      description: '2-3 sentences description. Replace with real text from product.',
      price: 15990,
      rating: 3.8,
      image: 'https://via.placeholder.com/600x450?text=Product+8',
      images: [
        'https://via.placeholder.com/200?text=8-1',
        'https://via.placeholder.com/200?text=8-2',
        'https://via.placeholder.com/200?text=8-3',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 9,
      name: 'Product 9 (replace)',
      description: '2-3 sentences description. Replace with real text from product.',
      price: 9990,
      rating: 4.1,
      image: 'https://via.placeholder.com/600x450?text=Product+9',
      images: [
        'https://via.placeholder.com/200?text=9-1',
        'https://via.placeholder.com/200?text=9-2',
        'https://via.placeholder.com/200?text=9-3',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 10,
      name: 'Product 10 (replace)',
      description: '2-3 sentences description. Replace with real text from product.',
      price: 77990,
      rating: 4.8,
      image: 'https://via.placeholder.com/600x450?text=Product+10',
      images: [
        'https://via.placeholder.com/200?text=10-1',
        'https://via.placeholder.com/200?text=10-2',
        'https://via.placeholder.com/200?text=10-3',
      ],
      link: 'https://kaspi.kz/shop/',
    },
  ];
}
