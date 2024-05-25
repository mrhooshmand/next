import React, {Fragment} from "react";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
export default function Home() {
  return (
    <Fragment>
      <h1 className="my-6 p-5 text-gray-600 hover:text-gray-300">Hello  Welcome To Main</h1>
        <ProductCard/>
    </Fragment>
  );
}
