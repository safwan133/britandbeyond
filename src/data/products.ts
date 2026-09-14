import type { Product } from '../types';
import teddy from "../assets/productlisting/teddy.jpg"
import clock from "../assets/productlisting/clock.jpg"
import cup from "../assets/productlisting/cup.jpg"
import booth from "../assets/productlisting/booth.jpg"

import scarf from "../assets/productlisting/scarf.jpg"
import hoodie from "../assets/productlisting/hoodie1.jpg"
import jacket from "../assets/productlisting/jacket.jpg"
import tshirt from "../assets/productlisting/tshirt.jpg"


export const souvenirProducts: Product[] = [
  {
    id: 'red-telephone-box-model',
    name: 'Heritage London Red Telephone Box Model',
    subheading: 'Hand-painted classic cast metal replica',
    imageUrl: booth,
    imageAlt: 'Miniature vintage red London telephone booth souvenir replica',
    category: 'souvenir',
  },
  {
    id: 'big-ben-snow-globe',
    name: 'Big Ben & Parliament Keepsake Snow Globe',
    subheading: 'Detailed architectural replica on a dark wood base',
    imageUrl: clock,
    imageAlt: 'Glass snow globe featuring Big Ben and the Houses of Parliament on a polished wooden base',
    category: 'souvenir',
  },
  {
    id: 'royal-guard-teddy-bear',
    name: 'London Royal Guard Plush Teddy Bear',
    subheading: 'Dressed in a traditional red tunic and bearskin hat',
    imageUrl: teddy,
    imageAlt: 'Plush brown teddy bear dressed in a red British Royal Guard uniform and black faux-fur hat',
    category: 'souvenir',
  },
  {
    id: 'classic-porcelain-tea-set',
    name: 'Heritage Fine Porcelain Tea Set',
    subheading: 'Complete teapot, teacups, saucers, and tray in red and navy floral print',
    imageUrl: cup,
    imageAlt: 'White porcelain tea set with teapot, two cups, saucers, and serving tray with intricate red and navy motifs',
    category: 'souvenir',
  },
];

export const apparelProducts: Product[] = [
  {
    id: 'lambswool-tartan-scarf',
    name: 'Heritage Lambswool Tartan Scarf',
    subheading: 'Classic red, navy, and green woven plaid with fringe',
    imageUrl: scarf,
    imageAlt: 'Folded red, navy blue, and dark green tartan plaid wool scarf with fringed edges',
    category: 'apparel',
  },
  {
    id: 'royal-crest-tee',
    name: 'Embroidered Royal Crest T-Shirt',
    subheading: 'Soft off-white cotton with lion and crown chest crest',
    imageUrl: tshirt,
    imageAlt: 'Off-white crewneck t-shirt featuring an embroidered red and blue royal crest with lions and a crown',
    category: 'apparel',
  },
  {
    id: 'retro-racing-jacket',
    name: 'Heritage Striped Button-Up Work Jacket',
    subheading: 'Navy twill jacket with red and cream accent stripes',
    imageUrl: jacket,
    imageAlt: 'Navy blue button-up collared jacket with bold red and off-white horizontal chest and trim stripes',
    category: 'apparel',
  },
  {
    id: 'crest-pullover-hoodie',
    name: 'Charcoal Crest Embroidered Hoodie',
    subheading: 'Heavyweight fleece with gold heraldic chest embroidery',
    imageUrl: hoodie,
    imageAlt: 'Dark charcoal gray pullover fleece hoodie featuring a small gold-embroidered heraldic shield crest',
    category: 'apparel',
  },
];