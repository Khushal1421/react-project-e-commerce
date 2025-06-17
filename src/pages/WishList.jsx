import { WishCard } from "../components/ui/WishCard";
import { WishListData1 } from "../data/info";
import { WishListData2 } from "../data/info";
function WishList() {
  return (
    <>
      <div className="main w-[85%] mx-auto mt-20">
        <div className="flex justify-between items-center">
          <div>Wishlist (4)</div>
          <div className="border-1 w-[223px] h-[56px] flex justify-center items-center">
            Move All To Bag
          </div>
        </div>
        <div className="mt-10 grid grid:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
          {
            //    () is imp instead of {} cuzz () means treat it like JSX element
            WishListData1.map((wishlist, i) => (
              <WishCard key={i} {...wishlist} />
            ))
          }
        </div>

        <div className="justforyou mt-25">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[25px]">
              <div className="flex gap-[5px] content-center">
                <div className="w-[20px] h-[40px] bg-[#DB4543] rounded-sm"></div>
                <div className="ml-3 flex flex-wrap content-center">
                  <p className=" ">Just For You</p>
                </div>
              </div>
            </div>

            <div className="border-1 w-[150px] h-[56px] flex justify-center items-center">
              See All
            </div>
          </div>

          <div className="second-list mt-10">
          <div className="mt-10 grid grid:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7.5">
          {
            //    () is imp instead of {} cuzz () means treat it like JSX element
            WishListData2.map((wishlist, i) => (
              <WishCard key={i} {...wishlist} />
            ))
          }
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;
