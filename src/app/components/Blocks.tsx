import Image from "next/image";
import pp from "../../../public/images/people-1.jpg";
export default function Blocks() {
  return (
    <section>
      <div className="">
        <Image className="w-full h-auto" src={pp} alt="" />
      </div>
    </section>
  );
}
