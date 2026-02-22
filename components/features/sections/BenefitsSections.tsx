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

const BenefitsSections = () => {
  const data: DataProps[] = indianStatesOfferData["rajasthan"];

  return (
    <div className="benefit-section w-full max-h-55 relative ">
      <div className="pt-2.5 inset-x-0 h-full w-full -translate-y-1/2">
        <div className="cards-container ">
          {data?.map((dat: DataProps) => (
            <BenefitsCard key={dat.id} data={dat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSections;
