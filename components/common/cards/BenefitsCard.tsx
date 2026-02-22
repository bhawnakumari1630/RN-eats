import Image, { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { DataProps } from "../../features/sections/Herosection";

const BenefitsCard: React.FC<{ data: DataProps }> = ({ data }) => {
  return (
    <div className="benefit-card font-montserrat">
      <div className=" ">
        <div>
          <h1 className="font-bold text-[27px] text-gray-700 leading-7.5 ">
            {data.name}
          </h1>
          <p className="text-xl m-0 text-gray-500" style={{ fontWeight: 500 }}>
            {data.specialty}
          </p>
          <div className="tag">{data.offer}</div>
        </div>
        <div className="flex items-end justify-between">
          <div className="mb-6  bg-(--primary-color) h-10 w-10 flex items-center justify-center rounded-full text-white ">
            <FaArrowRight />
          </div>
          <div className="image-container">
            <Image src={data.image} alt={data.specialty} fill className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
