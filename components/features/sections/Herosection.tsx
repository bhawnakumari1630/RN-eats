import { indianStatesOfferData } from "@/utils/data/benefits_card_data";
import BenefitsCard from "../../common/cards/BenefitsCard";
import { StaticImageData } from "next/image";

export interface DataProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  offer: string;
  type: string;
  image: string;
}

const HeroSection = () => {
  const data: DataProps[] = indianStatesOfferData["rajasthan"];

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 hero-section overflow-hidden">
      <div className="right-image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />
      </div>
      <div className="left-image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-90"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-(--primary-color) to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl pt-22 pb-53 ">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Satisfy your cravings, Instantly.
            {/* (Typewriter effect) */}
          </h1>
          <p className="mt-7 text-lg font-medium text-pretty text-(--text-muted) sm:text-xl/8">
            Freshly prepared vegan meals and local favorites delivered straight
            to your doorstep.
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-(--primary-color) to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>

      {/* <div className="absolute inset-x-0 top-[55%] translate-y-1/2">
        <div className="cards-container ">
          {data?.map((dat: DataProps) => (
            <BenefitsCard data={dat} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
