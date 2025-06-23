export const ProductBox = ({ image }) => {
  // w-[138px]
  return (
    <div className="bg-neutral-100  flex items-center  h-full object-contain px-3 py-4">
      <img src={image} alt="Product" />
    </div>
  );
};
