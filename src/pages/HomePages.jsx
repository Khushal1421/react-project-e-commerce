

import { useState } from "react";

import "../css-files/HomePage.css";
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import Playstation5 from "../smallcomponent/PlayStation5";
import AmazonSpeaker from "../smallcomponent/AmazonSpeaker";
import Perfume from "../smallcomponent/Perfume";
import WomenCollection from "../smallcomponent/womenCollection";

import RedBox from "../smallcomponent/RedBox";
import ProductCard from "../components/ui/ProductCard";
import LeftRight from "../smallcomponent/LeftRight";
import RedHighLight from "../smallcomponent/RedHighLight";
import RedButton from "../smallcomponent/RedButton";
import Phone from "../smallcomponent/Phone";
import Speaker from "../smallcomponent/Speaker";
import ArrowUp from "../smallcomponent/ArrowUp";

import Account from "../components/ui/Account";
import { data } from "../data/info";
import { productDetail } from "../data/info";
import { sellingProduct } from "../data/info";

import timing from '../images/timing.png';

function HomePages() {
  // sm:w-[90%] xl:w-[80%] 2xl:w-[60%]
  const [showMenu, setShowMenu] = useState(false);
  

  return (
    <>
      <div className="relative">
        {/* <hr className="absolute w-full border-[#b3b3b3]  mt-[1.4rem]"></hr> */}
      </div>
      <div className="main w-[100%] md:w-[85%]  mt-6 mx-auto ">
        <div className=" md:hidden  items-center rounded-3xl shadow-md inline">
          <HiOutlineBars3 onClick={() => setShowMenu(true)} />
        </div>
        <div className="container  flex gap-10">
          <div className="list hidden md:block  w-60 border-r border-[#b3b3b3] ">
            <div className="sub-list mt-5 w-52 ">
              <ul className="flex flex-col gap-4 pr-2">
                <div>
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
                </div>

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
          {showMenu && (
            <div className="fixed inset-0 bg-white z-50 flex justify-between">
              <div className="w-50">
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
              <div className="">
                  <RxCross2 size={30} onClick={() =>setShowMenu(false)} />
                 </div>
            </div>
          )}
          <div className="mt-5  w-full ">
            
            <Phone />
          </div>
        </div>

        {/* Flash Sales Diagram */}

        <div className="flash-sales mt-[10rem]  ">
          <div className="top-head flex justify-between">
            <div className="flex gap-20  ">
              <RedBox text={"Today's"} heading={"Flash Sales"} />
              <div className="hidden  timer md:flex flex-wrap content-end">
                <img src={timing} /> {/*src/images/timing.png */}
              </div>
            </div>

            <div className="left-right flex flex-wrap content-end ">
              <LeftRight />
            </div>
          </div>
        </div>

        <div className="discount-product">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
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
              {/* <RedButton width={"159px"} height={"56px"} content={"View All"} /> */}
              <div
                className={`h-[50px] w-[100px] sm:h-[56px] sm:w-[159px] bg-[#DB4543] text-white flex flex-wrap justify-center content-center rounded-sm `}
              >
                <p>View All</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
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
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
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

        {/* Perfume, PlayStation, Women, Speakers */}

        <div className="mt-20">
          <div>
            <RedBox text={"Featured"} heading={"New Arrival"} />
          </div>
        </div>

        <div className="mt-10 w-full flex flex-wrap gap-[30px]">
          {/* Left - Playstation */}
          <div className="flex-1 min-w-[280px] ">
            <Playstation5 />
          </div>

          {/* Right - All other components */}
          <div className="flex flex-col gap-[32px] flex-1 min-w-[280px]">
            {/* Top - Women Collection */}
            <div className="w-full">
              <WomenCollection />
            </div>

            {/* Bottom - Amazon Speaker + Perfume */}
            <div className="flex flex-wrap justify-between h-full gap-[30px]">
              <div className="flex-1 min-w-[180px]">
                <AmazonSpeaker />
              </div>
              <div className="flex-1 min-w-[180px]">
                <Perfume />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Account />
        </div>

        <div className="mt-[5rem] flex justify-end cursor-pointer">
          <ArrowUp />
        </div>
      </div>
    </>
  );
}

export default HomePages;
