import { FieldProps } from "../../types/contactForm.types";

export default function Field({ id, label, error, children }: FieldProps) {
    return (
        <div>
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-900">
                {label}
            </label>
            {children}
            {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
        </div>
    );
}
