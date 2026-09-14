import type { ReactNode } from 'react';
import { type LucideIcon } from 'lucide-react';

interface InfoProps {
    icon: LucideIcon;
    title: string;
    children: ReactNode;
}


export default function Info({ icon: Icon, title, children }: InfoProps) {
    return (
        <div className="flex gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-parchment text-heritage-500">
                <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
                <h3 className="font-semibold text-ink-900">{title}</h3>
                <div className="mt-1 text-sm leading-6 text-ink-900/60">{children}</div>
            </div>
        </div>
    );
}