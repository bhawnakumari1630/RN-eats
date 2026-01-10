"use client";
import { add_to_cart, ProductProp } from "@/redux/slices/CartSlice";
import { fetchProducts } from "@/redux/slices/ProductSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProductListProp extends ProductProp {
  color: string;
  href: string;
}

const products: ProductListProp[] = [
  {
    id: "A1b2C3d4",
    title: "Gold Pendant Necklace",
    description: "abcdkfl",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
    imageAlt: "Elegant gold pendant necklace for women.",
    price: 120,
    color: "Gold",
  },
  {
    id: "E5f6G7h8",
    title: "Diamond Stud Earrings",
    description: "abcdkfl",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    imageAlt: "Minimal diamond stud earrings for women.",
    price: 95,
    color: "Silver",
  },
  {
    id: "I9j0K1l2",
    title: "Pearl Drop Earrings",
    description: "abcdkfl",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    imageAlt: "Classic pearl drop earrings for women.",
    price: 110,
    color: "Pearl White",
  },
  {
    id: "M3n4O5p6",
    title: "Rose Gold Bracelet",
    description: "abcdkfl",
    href: "#",
    imageSrc: "https://m.media-amazon.com/images/I/71P8z0DrFRL._SY625_.jpg",
    imageAlt: "Rose gold bracelet designed for women.",
    price: 85,
    color: "Rose Gold",
  },
  {
    id: "Q7r8S9t0",
    title: "Emerald Stone Ring",
    description: "abcdkfl",
    href: "#",
    imageSrc:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR06151-WGS3E0_1_lar.jpg",
    imageAlt: "Emerald gemstone ring for women.",
    price: 140,
    color: "Emerald Green",
  },
  {
    id: "U1v2W3x4",
    title: "Traditional Gold Bangles",
    description: "abcdkfl",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/736x/55/89/6b/55896b4c11ef736c7c0138b20ab8c9e4.jpg",
    imageAlt: "Traditional gold bangles for women.",
    price: 200,
    color: "Gold",
  },
  {
    id: "Y5z6A7B8",
    title: "Minimal Chain Necklace",
    description: "abcdkfl",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    imageAlt: "Minimal gold chain necklace for women.",
    price: 70,
    color: "Gold",
  },
  {
    id: "C9D0e1F2",
    title: "Kundan Statement Earrings",
    description: "abcdkfl",
    href: "#",
    imageSrc:
      "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/p/p/pps2210404.jpg",
    imageAlt: "Traditional kundan statement earrings for women.",
    price: 160,
    color: "Red & Gold",
  },
];

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector((state: any) => state.products.data);

  console.log(productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleAddToCart(payload: ProductProp) {
    dispatch(add_to_cart(payload));
  }

  return (
    <div className="bg-whit bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                {/* <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p> */}
              </div>
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                className="w-full btn-primary py-2 mt-3"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
