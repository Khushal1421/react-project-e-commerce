

import dog from '../images2/dog.png';
import camera from '../images2/camera.png';
import laptop from '../images2/laptop.png';
import cream from '../images2/cream.png';
import car from '../images2/car.png';
import shoes from '../images2/shoes.png';
import game from '../images2/game.png';
import jacket from '../images2/jacket.png';


export const data=[
    {
        image: `${dog}`,
        percent: "",
        color: "green-400",
        name: "Breed Dry Dog Food",
        price: 100,
        oldPrice: '',
        rating: 3,
        reviews: 35,
      },
      {
        image: `${camera}`,
        percent: "",
        color: "red-500",
        name: "CANON EOS DSLR Camera",
        price: 360,
        oldPrice: '',
        rating: 4,
        reviews: 95,
      },
      {
        image: `${laptop}`,
        percent: "",
        color: "red-500",
        name: "ASUS FHD Gaming Laptop",
        price: 700,
        oldPrice: '',
        rating: 5,
        reviews: 325,
      },
      {
        image: `${cream}`,
        percent: "",
        color: "red-500",
        name: "Curology Product Set",
        price: 500,
        oldPrice: "",
        rating:4,
        reviews: 145,
      },

      {
        image: `${car}`,
        percent: "NEW",
        color: "green-400",
        name: "Kids Electric Car",
        price: 960,
        oldPrice: '',
        rating: 5,
        reviews: 65,
      },
      {
        image: `${shoes}`,
        percent: "",
        color: "red-500",
        name: "Jr. Zoom Soccer Cleats",
        price: 1160,
        oldPrice: '',
        rating: 5,
        reviews: 35,
      },
      {
        image: `${game}`,
        percent: "NEW",
        color: "green-400",
        name: "GP11 Shooter USB Gamepad",
        price: 660,
        oldPrice: '',
        rating: 4.5,
        reviews: 55,
      },
      {
        image: `${jacket}`,
        percent: "",
        color: "red-500",
        name: "Quilted Satin Jacket",
        price: 660,
        oldPrice: "",
        rating:4.5,
        reviews: 55,
      },
]



import redGamePad from '../images/redGamePad.png';
import keyboard from '../images/keyboard.png';
import gamingMonitor from '../images/gamingMonitor.png';
import chair from '../images/chair.png';

export const productDetail = [
  {
    image: `${redGamePad}`,
    percent: "-40%",
    color: "red-500",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
  },
  {
    image: `${keyboard}`, // ? Why use `` here
    percent: "-35%",
    color: "red-500",
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    image: `${gamingMonitor}`,
    percent: "-30%",
    color: "red-500",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
  },
  {
    image: `${chair}`,
    percent: "-25%",
    color: "red-500",
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 4.5,
    reviews: 99,
  },
];


import guccicoat from '../images2/gucci-coat.png';
import bag from '../images2/bag.png';
import speaker from '../images2/speaker.png';
import tabcup from '../images2/tabcup.png';

export const sellingProduct = [
  {
    image: `${guccicoat}`,
    percent: "",
    color: "red-500",
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    image: `${bag}`,
    percent: "",
    color: "red-500",
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    rating: 4.5,
    reviews: 65,
  },
  {
    image: `${speaker}`,
    percent: "",
    color: "red-500",
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    rating: 4.5,
    reviews: 65,
  },
  {
    image: `${tabcup}`,
    percent: "",
    color: "red-500",
    name: "Small BookSelf",
    price: 360,
    oldPrice: "",
    rating: 5,
    reviews: 65,
  },
];

// src/logos/Home.png
// src/logos/Dollar.png
// src/logos/Bag.png
// src/logos/CashBag.png

import home from '../logos/Home.png'
import dollar from '../logos/Dollar.png'
import bagee from '../logos/Bag.png'
import cashbag from '../logos/CashBag.png'

export const carddata = [
  {
    image:`${home}`,
    backgroundcolor: "white",
    color: "black",
    heading: "10.5k",
    para: "Sallers active our site",
  },
  {
    image: `${dollar}`,
    backgroundcolor: "red-500",
    color: "white",
    heading: "33k",
    para: "Monthly Product Sale",
  },
  {
    image: `${bagee}`,
    backgroundcolor: "white",
    color: "black",
    heading: "45.5k",
    para: "Customer active in our site",
  },
  {
    image: `${cashbag}`,
    backgroundcolor: "white",
    color: "black",
    heading: "25k",
    para: "Anual gross sale in our site",
  },
];

// src/images2/bag.png
// src/images2/speaker.png
// src/images2/game.png
// src/images2/jacket.png

export const WishListData1 = [
  {
    color:'red-500',
    percentage: '-35%',
    name: 'Gucci duffle bag',
    price: '960',
    oldPrice: '1160',
    image: `${bag}`,
    star: ''
  },
  {
    color:'red-700',
    percentage: '',
    name: 'RGB liquid CPU Cooler',
    price: '1960',
    oldPrice: '',
    image: `${speaker}`,
    star: '',
  },
  {
    color:'red-700',
    percentage: '',
    name: 'GP11 Shooter USB GamePad',
    price: '550',
    oldPrice: '',
    image: `${game}`,
    star: ''
  },
  {
    color:'red-700',
    percentage: '',
    name: 'Quilted Satin Jacket',
    price: '750',
    oldPrice: '',
    image: `${jacket}`,
    star: ''
  }
]

// src/images2/laptop.png
// src/images/gamingMonitor.png
// src/images/redGamePad.png
// src/images/keyboard.png

export const WishListData2 = [
  {
    color:'red-500',
    percentage: '-35%',
    name: 'ASUS FHD Gaming Laptop',
    price: '960',
    oldPrice: '1160',
    image: `${laptop}`,
    star: 5,
    reviews: '65'
  },
  {
    color:'red-700',
    percentage: '',
    name: 'IPS LCD Gaming Monitor',
    price: '1160',
    oldPrice: '',
    image: `${gamingMonitor}`,
    star:5,
    reviews: '65'
  },
  {
    color:'red-700',
    percentage: '',
    name: 'HAVIT HV-G92 Gamepad',
    price: '560',
    oldPrice: '',
    image: `${redGamePad}`,
    star: 5,
    reviews: '65'
  },
  {
    color:'red-700',
    percentage: '',
    name: 'AK-900 Wired Keyboard',
    price: '200',
    oldPrice: '',
    image: `${keyboard}`,
    star: 5,
    reviews: '65'
  }
]

export const CartData = [
  {
    image: `${gamingMonitor}`,
    name: 'LCD Monitor',
    price: 650,
    quantity: 1,
    subtotal:0
  },
  {
    image: `${redGamePad}`,
    name: 'H1 Gamepad',
    price: 550,
    quantity: 1,
    subtotal:0
  }
]

// src/images3/image 57 (1).png
// src/images3/image 58 (1).png
// src/images3/image 61 (1).png
// src/images3/image 59 (1).png
import im1 from '../images3/image1.png'
import im2 from '../images3/image2.png'
import im3 from '../images3/image3.png'
import im4 from '../images3/image4.png'

export const ProductDetailImages=[
  {
    image: `${im1}`,
  },
  {
    image:`${im2}`,
  },
  {
    image:`${im3}`,
  },
  {
    image:`${im4}`,
  }
]

export const sizes =[
   'XS', 'S', 'M', 'L', 'XL'
];