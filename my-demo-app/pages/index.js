import Link from "next/link";
import client from "./shopify";

// import Header from '../components/Header.js'

export default function Home({products}) {
  return (
   <>
   <div>
    <img className=" object-cover lg:will-change-auto " src="/home.png"></img>
   </div>
   <div>
     <h1 className=" text-center pt-11 font-semibold text-6xl font-mono ">Featured Products</h1>
     <h3 className="text-center pt-4 text-lg  font-mono" >Summer Collection New Modern Design</h3>
     {products.map((product) => (
     <section className="text-gray-600 body-font">
  <div className="container px-9 py-20 mx-auto ml-40">
    <div className="flex flex-wrap -m-4">
      <div key={product.id} className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-6 hover:scale-105">
      <Link href={`product/${product.handle}`} className="block relative rounded overflow-hidden">
         <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src={product.images[0].src} />
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.title}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">T-shirts</h2>
          <p className="mt-1">{product.variants[0].price.amount}</p>
        </div>
      </Link>
      </div>
    </div>
  </div>
</section>
))}
   </div>
   </>
  
  )}
  export async function getStaticProps() {
    // Fetch all products in your shop
    let products = await client.product.fetchAll();
    products = JSON.parse(JSON.stringify(products));
  
    console.log();
  
    return {
      props: {
        products: products,
      },
    };
  }
  