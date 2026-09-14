import { Check } from 'lucide-react';

interface ContactSuccessStateProps {
    onReset: () => void;
}

export default function ContactSuccessState({ onReset }: ContactSuccessStateProps) {
    return (
        <div role="status" className="mt-10 flex min-h-[280px] flex-col items-center justify-center text-center">
            <span className="grid size-16 place-items-center rounded-full bg-heritage-500 text-white">
                <Check className="size-7" aria-hidden="true" />
            </span>
            <h4 className="mt-5 font-display text-2xl text-ink-900">Message ready</h4>
            <p className="mt-3 max-w-xs text-sm leading-6 text-ink-900/60">
                Thanks for getting in touch. We&rsquo;ll be in touch soon.
            </p>
            <button
                type="button"
                onClick={onReset}
                className="mt-6 min-h-[48px] border border-ink-900/20 px-6 text-sm font-medium text-ink-900 transition-colors hover:border-heritage-500 hover:text-heritage-600"
            >
                Send another
            </button>
        </div>
    );
}