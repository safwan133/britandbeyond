import ContactDetails from '../components/ui/ContactDetails';
import ContactForm from '../components/ui/ContactForm';


export default function ContactUs() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#FDF8F7] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
          Come and say hello
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
          Your York visit starts here.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
