export interface NavItem {
  label: string;
  href: string;
}

export type ProductCategory = 'souvenir' | 'apparel';

export interface Product {
  id: string;
  name: string;
  subheading: string;
  imageUrl: string;
  imageAlt: string;
  category: ProductCategory;
}


export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface TrustBadge {
  id: string;
  label: string;
}

export interface StoreDetail {
  addressLines: string[];
  landmarkNote: string;
  hours: { days: string; time: string }[];
  phone: string;
  phoneHref: string;
  email: string;
  mapsUrl: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}
