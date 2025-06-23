export const ProductBigBox = ({ image }) => {
    return (
      <div className="bg-neutral-100 h-full w-auto flex items-center justify-center">
        <img src={image} alt="Product" />
      </div>
    );
  };