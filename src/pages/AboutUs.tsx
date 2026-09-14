import { BadgeCheck, MapPinned } from "lucide-react";
import shop from "../assets/shop.png"
import keychain from "../assets/keychain.png"
import magnets from "../assets/magnets.png"


export default function AboutUs() {
  return (
    <section
      id="about"
      className="scroll-mt-20 relative overflow-hidden bg-[#F7F2E7] py-20 sm:py-28 lg:py-36"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(200,16,46,0.05) 0px, rgba(200,16,46,0.05) 1.5px, transparent 1.5px, transparent 16px), radial-gradient(circle at 12% 15%, rgba(19,34,66,0.06), transparent 45%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <p className="section-kicker text-red-500">Our story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            British character,<br />
            <span className="italic text-red-600">warmly shared.</span>
          </h2>
          <p className="mt-7 text-lg leading-8 text-muted-foreground">
            We believe the best souvenirs are more than objects. They are reminders of a place, a feeling and a brilliant day out.
          </p>
          <p className="mt-5 leading-7 text-muted-foreground">
            From our shop on High Ousegate, we bring together the wit, craft and unmistakable character of Britain. Every tea tin, miniature and piece of knitwear is selected with international visitors in mind—authentic, beautifully made and easy to treasure.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <div className="flex min-h-20 items-center gap-3 border border-border p-4">
              <BadgeCheck className="size-6 shrink-0 text-red-600" aria-hidden="true" />
              <span className="text-sm font-semibold">100% Authentic Keepsakes</span>
            </div>
            <div className="flex min-h-20 items-center gap-3 border border-border p-4">
              <MapPinned className="size-6 shrink-0 text-red-600" aria-hidden="true" />
              <span className="text-sm font-semibold">Curated in Historic York</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-sm bg-[#132242] p-5 shadow-[0_30px_60px_-25px_rgba(19,34,66,0.55)] ring-1 ring-[#C9A227]/30 sm:p-7">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="mt-6 rotate-[-2.5deg] rounded-sm bg-white p-2 shadow-[0_18px_35px_-14px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:rotate-0 sm:p-3">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={magnets}
                  alt="Fridge magnets collection"
                  loading="lazy"
                  width={700}
                  height={930}
                  className="size-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>
            <div className="rotate-[2deg] rounded-sm bg-white p-2 shadow-[0_18px_35px_-14px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:rotate-0 sm:p-3">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={keychain}
                  alt="London souvenir bag charm keychain"
                  loading="lazy"
                  width={700}
                  height={930}
                  className="size-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>
            <div className="col-span-2 rounded-sm bg-white p-2 shadow-[0_18px_35px_-14px_rgba(0,0,0,0.55)] sm:p-3">
              <div className="aspect-[16/8] w-full overflow-hidden bg-muted">
                <img
                  src={shop}
                  alt="London souvenir shop interior displaying red double-decker buses, tea tins, Big Ben models, and Union Jack memorabilia"
                  loading="lazy"
                  width={1000}
                  height={500}
                  className="size-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}