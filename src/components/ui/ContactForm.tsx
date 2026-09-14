import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import type { FormStatus } from '../../types';
import { contactSchema } from '../../validators/contactFormValidator';
import ContactFormFields from './ContactFormFields';
import ContactSuccessState from './ContactSuccessState';
import { ContactFormValues } from '../../types/contactForm.types';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {register,handleSubmit,reset,formState: { errors, isSubmitting },} = useForm<ContactFormValues>({
    resolver: joiResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('submitting');
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB_THREE_FORM,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        reset();
      } else {
        setStatus('idle');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('idle');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  const isPending = isSubmitting || status === 'submitting';

  return (
    <div className="rounded-sm border border-ink-900/10 bg-white p-6 shadow-lg shadow-ink-900/5 sm:p-9">
      <h3 className="font-display text-3xl text-ink-900">Send an enquiry</h3>
      <p className="mt-2 text-sm leading-6 text-ink-900/60">
        Looking for something particular? Leave a note and our team will help.
      </p>

      {errorMessage && (
        <div className="mt-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      {status === 'success' ? (
        <ContactSuccessState onReset={() => setStatus('idle')} />
      ) : (
        <ContactFormFields
          register={register}
          errors={errors}
          onSubmit={handleSubmit(onSubmit)}
          isPending={isPending}
        />
      )}
    </div>
  );
}