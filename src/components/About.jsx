import Card from "./ui/Card";
import CeoCard from "./ui/CeoCard";
import Account from '../components/ui/Account'
import { carddata } from "../data/info.js";

function About() {
  const ceodata = [
    {
      image: "src/images2/image 46.png",
      name: "Tom Cruise",
      description: "Founder and Chairman",
    },
    {
      image: "src/images2/image 51.png",
      name: "Emma Watson",
      description: "Managing Director",
    },
    {
      image: "src/images2/image 47.png",
      name: "Will Smith",
      description: "Product Designer",
    },
  ];

  return (
    <>
      <div className="ml-[10%]">
        <div>
          <p>Home / About</p>
        </div>
        <div className="flex justify-between mt-4">
          {" "}
          {/*What can be other way to Arrange Our Story and Image */}
          <div className="mt-[10rem]">
            <h1 className="font-medium text-5xl">Our Story</h1>
            <div className="mt-[40px]">
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping <br />
                makterplace with an active presense in Bangladesh. Supported{" "}
                <br />
                by wide range of tailored marketing, data and service solutions,{" "}
                <br />
                Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                millioons customers across the region.
              </p>

              <p className="mt-[24px]">
                Exclusive has more than 1 Million products to offer, growing at
                a <br />
                very fast. Exclusive offers a diverse assotment in categories{" "}
                <br />
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className="">
            <img src="src/images2/AfricanWomen.png" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-[30px]">
            {carddata.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex gap-[30px]">
            {ceodata.map((data, index) => (
              <CeoCard key={index} {...data} />
            ))}
          </div>
        </div>

        <div className="mt-[2rem] mx-[33rem]  gap-2 flex  w-[112px] h-[16px]">
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
        </div>

        <div className="mt-[10rem]">
          <Account />
        </div>
      </div>
    </>
  );
}

export default About;
