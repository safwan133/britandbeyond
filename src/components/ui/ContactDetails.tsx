import { Clock, ExternalLink, Mail, MapPin, Phone, } from 'lucide-react';
import { STORE_DETAIL } from '../../data/contactDetails';
import Info from './Info';


export default function ContactDetails() {
    return (
        <div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <Info icon={MapPin} title="Find us">
                    <a
                        className="underline decoration-heritage-500 underline-offset-4 hover:text-heritage-600"
                        href={STORE_DETAIL.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {STORE_DETAIL.addressLines.map((line) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </a>
                    <p className="mt-2 text-sm">{STORE_DETAIL.landmarkNote}</p>
                </Info>

                <Info icon={Clock} title="Opening hours">
                    {STORE_DETAIL.hours.map((entry) => (
                        <p key={entry.days}>
                            {entry.days}: {entry.time}
                        </p>
                    ))}
                </Info>

                <Info icon={Phone} title="Call us">
                    <a href={STORE_DETAIL.phoneHref} className="hover:text-heritage-600">
                        {STORE_DETAIL.phone}
                    </a>
                </Info>

                <Info icon={Mail} title="Write to us">
                    <a href={`mailto:${STORE_DETAIL.email}`} className="break-all hover:text-heritage-600">
                        {STORE_DETAIL.email}
                    </a>
                </Info>
            </div>

            <a
                href={STORE_DETAIL.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="relative mt-8 block min-h-[176px] overflow-hidden rounded-sm border border-ink-900/10 transition-colors hover:border-heritage-500"
            >
                <iframe
                    src="https://www.google.com/maps?q=15+High+Ousegate,+York+YO1+8RZ&output=embed"
                    title="Brit & Beyond store location — 15 High Ousegate, York"
                    width="100%"
                    height="176"
                    style={{ border: 0, pointerEvents: 'none' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[176px] w-full grayscale-[15%]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink-900/80 p-4 font-semibold text-white backdrop-blur-sm">
                    Open directions in Google Maps
                    <ExternalLink className="size-5" aria-hidden="true" />
                </span>
            </a>
        </div>
    );
}