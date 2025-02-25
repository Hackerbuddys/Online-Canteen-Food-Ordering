import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import menuImage7 from "./assets/images/menu-7.png";
import menuImage8 from "./assets/images/menu-8.png";
import menuImage9 from "./assets/images/menu-9.png";
import menuImage10 from "./assets/images/menu-10.png";
import menuImage11 from "./assets/images/menu-11.png";
import menuImage12 from "./assets/images/menu-12.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-2.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/Review-1.png";
import reviewImage2 from "./assets/images/Review-3.png";
import reviewImage3 from "./assets/images/Review-2.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";
const menu = [
  {
    img: menuImage1,
    name: "Meal Burgar",
    discount: "15% OFF",
    price: "$15.99",
  },
  {
    img: menuImage2,
    name: "Egg Half-fry",
    discount: "10% OFF",
    price: "$9.50",
  },
  {
    img: menuImage3,
    name: "Chicken Lolipop",
    discount: "12% OFF",
    price: "$10.99",
  },
  {
    img: menuImage4,
    name: "Spicy Pizza",
    discount: "11% OFF",
    price: "$8.99",
  },
  {
    img: menuImage5,
    name: "Paneer Tikka",
    discount: "14% OFF",
    price: "$12.99",
  },
  {
    img: menuImage6,
    name: "Black Tea",
    discount: "10% OFF",
    price: "$5.00",
  },
  {
    img: menuImage7,
    name: "chinse Noodles",
    discount: "20% OFF",
    price: "$10.99",
  },
  {
    img: menuImage8,
    name: "Mix Frappe",
    discount: "25% OFF",
    price: "$15.99",
  },
  {
    img: menuImage9,
    name: "Momo",
    discount: "15% OFF",
    price: "$10.00",
  },
  {
    img: menuImage10,
    name: "Samosa With Tea",
    discount: "12% OFF",
    price: "$6.50",
  },
  {
    img: menuImage11,
    name: "Pav Bhaji",
    discount: "25% OFF",
    price: "$10.50",
  },
  {
    img: menuImage12,
    name: "Korean Spice Fish Fry",
    discount: "50% OFF",
    price: "$10.10",
  },
];

const cart = [
  {
    img: cartImage1,
    name: "Chicken Burger",
    price: "$15.50/pc",
    // count : "3"
  },
  {
    img: cartImage2,
    name: "Aloo Tikka",
    price: "$10.99/pc",
    // count : "2"
  },
  {
    img: cartImage3,
    name: "French Frise",
    price: "$12.50/pc",
    // count : "1"
  },
  {
    img: cartImage4,
    name: "Plates Meal",
    price: "$20.99/pc",
    count : "5"
  },
];

const product = [
  {
    img: productImage1,
    name: "Solo Burger",
    discount: "50% OFF",
    price: "$12.50",
  },
  {
    img: productImage2,
    name: "Ice-cream",
    discount: "50% OFF",
    price: "$15.99",
  },
  {
    img: productImage3,
    name: "Coco-cream",
    discount: "50% OFF",
    price: "$10.00",
  },
];
const review = [
  {
    img: reviewImage1,
    name: "Lily Jams",
    comment:
      "A hidden gem! I stumbled upon this restaurant while exploring the neighborhood, and I'm so glad I did. The food was absolutely delicious, with fresh ingredients and unique flavors. The ambiance was cozy and inviting, perfect for a relaxed dining experience. The staff was friendly and attentive, making sure we had everything we needed. I'll definitely be coming back!",
  },
  {
    img: reviewImage2,
    name: "Jane Smith",
    comment:
      "Had a wonderful dinner experience here with my family. The menu had a great variety of options to choose from, catering to everyone's tastes. We tried a few different dishes, and each one was bursting with flavor. The presentation was also top-notch, making the dining experience even more enjoyable. The staff was accommodating and provided excellent service throughout our meal. Highly recommend!",
  },
  {
    img: reviewImage3,
    name: "Fatima Johnson",
    comment:
      "Absolutely fantastic food and service! I've been a regular customer here for years, and the quality never disappoints. Whether it's breakfast, lunch, or dinner, every dish is cooked to perfection. The chefs truly know their craft, and it shows in every bite. The staff is like family, always welcoming and attentive. If you're looking for a memorable dining experience, look no further than this restaurant.",
  },
];
const blog = [
  {
    img: blogImage1,
    title: "A cheeseburger and french fries",
    date: "May 1st, 2024",
    desc:  "French fries are long, thin strips of potato that are deep-fried. They are a popular fast food side dish and can be served plain or with a variety of toppings, such as ketchup, salt, vinegar, or cheese.",
  },
  {
    img: blogImage2,
    title: "A grilled cheese sandwich ",
    date: "May 1st, 2024",
    desc:  "Melted cheese is a key component of a grilled cheese sandwich. In the image, it appears to be a yellow cheese, possibly cheddar or Monterey Jack. Lean protein that adds heartiness to the sandwich.",
  },
  {
    img: blogImage3,
    title: "A blueberries and lemon slices",
    date: "May 1st, 2024",
    desc:  "In a saucepan, combine the sugar and 1 cup of water. Heat over medium heat, stirring constantly, until the sugar dissolves. Bring to a boil, then remove from the heat and let cool completely.",
  },
];
export { menu, cart, product, review, blog };
