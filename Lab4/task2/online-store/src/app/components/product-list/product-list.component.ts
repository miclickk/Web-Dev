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
      name: 'Электрочайник BORK',
      description: 'Электрочайник BORK K703 CH бежевый',
      price: 239800,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h0c/84945821138974.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h0c/84945821138974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/h99/84945821204510.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h4f/84945821335582.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/elektrochainik-bork-k703-ch-bezhevyi-115981522/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 5,
      name: 'Портативная колонка',
      description: 'Портативная колонка FaizFull FK280 черный',
      price: 37200,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/pd1/89535491.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/pe8/84858216.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/pd1/89535492.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc2/peb/84858221.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-faizfull-fk280-chernyi-141887881/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 6,
      name: 'Увеличительный экран',
      description: 'Увеличительный экран для смартфона DIKAXING 8x черный',
      price: 12000,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p9a/91231882.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p56/p9a/91231882.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p9a/91231883.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p9a/91231883.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/dikaxing-8x-chernyi-153498732/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 7,
      name: 'Внешний аккумулятор Virma',
      description: 'Внешний аккумулятор Virma SPB10K Magnetic 10000 мАч 22.5 Вт серый',
      price: 13900,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb4/p4f/60229626.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb4/p4f/60229626.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p4f/60229629.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p4c/60229633.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/',
    },
    {
      id: 8,
      name: 'Туалетный столик',
      description: 'Туалетный столик 531037 75x32.5x18 см, ЛДСП, МДФ',
      price: 26400,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h8e/70171886059550.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h8e/70171886059550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h13/70171886583838.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-virma-spb10k-magnetic-10000-mach-22-5-vt-seryi-142183039/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 9,
      name: 'Смарт-часы',
      description: 'Смарт-часы NOLIMIT GPS черный',
      price: 39990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2c/p69/67028255.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p04/pc6/86314199.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/p6c/67028248.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/p69/67028255.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/smart-chasy-nolimit-gps-chernyi-137675544/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
    {
      id: 10,
      name: 'FOLDING BAG комплект',
      description: 'FOLDING BAG комплект Alumi Folding Table N13-4 L28 AFT белый',
      price: 10000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hf4/65135052554270.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/hf4/65135052554270.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/h52/65135055568926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h40/65135058649118.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/folding-bag-komplekt-alumi-folding-table-n13-4-l28-aft-belyi-105480056/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7jg2qaCWiX2dgyo1pkdchujO&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LFwQv0gVTJOH-n5e-sXFIHuvnOcdX_T3vHZ8Es-iz3SvTbfCof4V_xoC0iMQAvD_BwE',
    },
  ];
}
