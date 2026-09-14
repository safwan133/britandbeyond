import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Loader2, Send } from 'lucide-react';
import Field from './Field';
import { ContactFormValues } from '../../types/contactForm.types';

const fieldClasses =
  'h-12 w-full border border-ink-900/20 bg-white px-4 text-[15px] text-ink-900 outline-none transition-colors focus:border-heritage-500';

interface ContactFormFieldsProps {
  register: UseFormRegister<ContactFormValues>;
  errors: FieldErrors<ContactFormValues>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  isPending: boolean;
}

export default function ContactFormFields({ register, errors, onSubmit, isPending, }: ContactFormFieldsProps) {
  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
      <Field id="contact-name" label="Name" error={errors.name?.message}>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          {...register('name')}
          className={fieldClasses}
        />
      </Field>

      <Field id="contact-email" label="Email" error={errors.email?.message}>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          {...register('email')}
          className={fieldClasses}
        />
      </Field>

      <Field id="contact-message" label="Message" error={errors.message?.message}>
        <textarea
          id="contact-message"
          rows={5}
          {...register('message')}
          className={`${fieldClasses} h-auto min-h-[144px] resize-y py-3`}
        />
      </Field>

      <button
        type="submit"
        disabled={isPending}
        className="flex h-12 w-full items-center justify-center gap-2 bg-heritage-500 text-base font-medium text-white transition-colors duration-300 hover:bg-heritage-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            Sending&hellip;
          </>
        ) : (
          <>
            <Send className="size-5" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}