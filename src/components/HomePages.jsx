import "../css-files/HomePage.css";
import { FaAngleRight } from "react-icons/fa6";

import Playstation5 from "../smallcomponent/PlayStation5";
import AmazonSpeaker from "../smallcomponent/AmazonSpeaker";
import Perfume from "../smallcomponent/Perfume";
import WomenCollection from "../smallcomponent/womenCollection";

import RedBox from "../smallcomponent/RedBox";
import ProductCard from "./ui/ProductCard";
import LeftRight from "../smallcomponent/LeftRight";
import RedHighLight from "../smallcomponent/RedHighLight";
import RedButton from "../smallcomponent/RedButton";
import Phone from "../smallcomponent/Phone";
import Speaker from "../smallcomponent/Speaker";

import Account from "./ui/Account";
import { data } from "../data/info";
import { productDetail } from "../data/info";
import { sellingProduct } from "../data/info";

function HomePages() {
  // sm:w-[90%] xl:w-[80%] 2xl:w-[60%]
  return (
    <>
      <div className="relative">
        <hr className="absolute w-full  mt-[1.4rem]"></hr>
      </div>
      <div className="main md:w-[85%]  mt-6 mx-auto ">
        <div className="container h-90 flex gap-15">
          <div className="list border-r-1 w-60 ">
            <div className="sub-list mt-5 w-52 ">
              <ul className="flex flex-col gap-4">
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  Woman's Fashion <FaAngleRight />
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Men's Fashion <FaAngleRight />
                </p>
                <p>Electronics</p>
                <p>Home and Lifestyle</p>
                <p>Medicine</p>
                <p>Sports & Outdoor</p>
                <p>Baby's & Toys</p>
                <p>Groceries and Pets</p>
                <p>Health and Beauty</p>
              </ul>
            </div>
          </div>
          <div className="mt-5  h-[200px] ">
            {/* <img
              src="src/images/Frame560(1).png"
              style={{ height: "340px", width:'1200px' }}
              alt="Mobile Phone "
            /> */}
            <Phone />
          </div>
        </div>

        {/* Flash Sales Diagram */}

        <div className="flash-sales mt-[10rem]  ">
          <div className="top-head flex justify-between">
            <div className="flex gap-20  ">
              <RedBox text={"Today's"} heading={"Flash Sales"} />
              <div className="hidden  timer md:flex flex-wrap content-end">
                <img src="src/images/timing.png" />
              </div>
            </div>

            <div className="left-right flex flex-wrap content-end ">
              <LeftRight />
            </div>
          </div>
        </div>

        <div className="discount-product">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {productDetail.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className=" mt-10 mx-auto flex justify-center ">
            <RedButton
              width={"234px"}
              height={"56px"}
              content={"View Product"}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="categories mt-20 ">
          <div className="flex justify-between flex-wrap content-end">
            <RedBox text={"Categories"} heading={"Browse By Category"} />
            <LeftRight />
          </div>
          <div className="mt-10">
            <RedHighLight />
          </div>
        </div>

        <hr className="border-0.3 mt-[5rem]"></hr>

        {/* Best Selling Products */}

        <div className="best-sell mt-20 ">
          <div className="flex justify-between flex-wrap content-end">
            <RedBox text={"This Month"} heading={"Best Selling Products"} />
            <div className="flex flex-wrap content-end">
              <RedButton width={"159px"} height={"56px"} content={"View All"} />
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
              {sellingProduct.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-30 w-full">
          <Speaker />
        </div>

        {/* Explore Our Products */}

        <div className="mt-20">
          <div className="flex flex-wrap justify-between content-end">
            <div>
              <RedBox text={"Our Products"} heading={"Explore our Products"} />
            </div>
            <div className="flex flex-wrap content-end">
              <LeftRight />
            </div>
          </div>

          <div className="mt-10">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
              {data.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>

          <div className="mt-10 mx-auto flex justify-center flex-wrap content-center">
            <RedButton
              height={"56px"}
              width={"236px"}
              content={"View All Products"}
            />
          </div>
        </div>

        {/* Grid Image */}

        <div className="mt-20">
          <div>
            <RedBox text={"Featured"} heading={"New Arrival"} />
          </div>
        </div>

        <div className="mt-10 h-[600px] w-[1170px] flex gap-[30px]">
          <div className="">
            <Playstation5 />
          </div>
          <div className="flex flex-col gap-[32px]">
            <div>
              <WomenCollection />
            </div>
            <div className="flex gap-[30px]">
              <div>
                <AmazonSpeaker />
              </div>
              <div>
                <Perfume />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Account />
        </div>
      </div>
    </>
  );
}

export default HomePages;
