import React, {Fragment} from "react";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
export default function Home() {
  return (
    <Fragment>
      <h1 className="">Hello</h1>
        <Link href='./users'>Users</Link>
        <ProductCard/>
    </Fragment>
  );
}
