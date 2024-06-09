import ClientOpinionBox from "./clientOpinionBox";
import Pulse from "./pulse";
import { Slider } from "./slider";
import TxtArow from "./txtArow";

export default function ClientOpinion() {
  return (
    <>
      <div className="mb-4 flex items-center gap-x-4 lg:mr-auto lg:w-[95.6%]">
        <Pulse className="block" />
        <TxtArow isPulse={false} title="نظرات مشتریان" />
      </div>
      <Slider className="opinion lg:gap-x-4">
        <>
          <ClientOpinionBox />
          <ClientOpinionBox className="hidden" />
          <ClientOpinionBox className="hidden" />
          <ClientOpinionBox className="hidden" />
        </>
      </Slider>
    </>
  );
}
