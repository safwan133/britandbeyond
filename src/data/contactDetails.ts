import { NavItem, StoreDetail } from "../types";

export const STORE_DETAIL: StoreDetail = {
    addressLines: ['15 High Ousegate', 'York, England YO1 8RZ'],
    landmarkNote: 'A short walk from Parliament Street and Coppergate.',
    hours: [{ days: 'Mon \u2013 Sun', time: '8:00 AM \u2013 9:00 PM' }],
    phone: '+44 7587 704 077',
    phoneHref: 'tel:+44 7587 704 077',
    email: 'Brittandbeyonduk@gmail.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=15+High+Ousegate+York+YO1+8RZ',
};

export const QUICK_LINKS: NavItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Featured', href: '#featured' },
    { label: 'Contact', href: '#contact' },
];
