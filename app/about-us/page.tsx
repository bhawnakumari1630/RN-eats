"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 onClick={() => console.log("about cliked")}>aboutus</h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default page;
