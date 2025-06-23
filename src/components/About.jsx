import Card from "./ui/Card";
import CeoCard from "./ui/CeoCard";
import Account from '../components/ui/Account'
import { carddata } from "../data/info.js";

import tom from '../images2/image 46.png'
import emma from '../images2/image 51.png'
import will from '../images2/image 47.png'
import africanwomen from '../images2/AfricanWomen.png'

function About() {
  const ceodata = [
    {
      image: `${tom}`,
      name: "Tom Cruise",
      description: "Founder and Chairman",
    },
    {
      image: `${emma}`,
      name: "Emma Watson",
      description: "Managing Director",
    },
    {
      image: `${will}`,
      name: "Will Smith",
      description: "Product Designer",
    },
  ];

  return (
    <>
      <div className=" mx-auto w-[85%] ">
        <div className="mt-[4rem]">
          <p>Home / About</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between mt-4 ">
          {" "}
          {/*What can be other way to Arrange Our Story and Image */}
          <div className="mt-[5rem] lg:mt-[10rem]">
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
          <div className="mt-[4rem] pl-6 lg:mt-0">
            <img src={africanwomen} />
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
            {carddata.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>

        <div className="mt-[9rem]">
          {/* <div className="flex  justify-center gap-[2rem] mx-auto">
            {ceodata.map((data, index) => (
              <CeoCard key={index} {...data} />
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4"> {/* Old One:- grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2rem] h-auto mx-auto */}
            {ceodata.map((data, index) => (
              <CeoCard key={index} {...data} />
            ))}
          </div>
        </div>

        <div className="mt-[5rem] mx-auto flex justify-center gap-[2rem]">
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
          <div className="rounded-full bg-neutral-400 w-[12px] h-[12px]"></div>
        </div>

        <div className="mt-[10rem] mx-auto">
          <Account />
        </div>
      </div>
    </>
  );
}

export default About;
