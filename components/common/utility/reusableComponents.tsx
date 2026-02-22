import { BsDot } from "react-icons/bs";

export const CuisinesList: React.FC<{
  data: string[];
  style?: string | null;
}> = ({ data, style = null }) => {
  return (
    <div className={`flex items-center ${style ? style : ""}`}>
      {data?.map((item: string, index: number) => (
        <>
          {index > 0 && index < data.length && (
            <>
              &nbsp;
              <BsDot className="text-xl -mx-1.25" />
              &nbsp;
            </>
          )}
          {item}
        </>
      ))}
    </div>
  );
};
