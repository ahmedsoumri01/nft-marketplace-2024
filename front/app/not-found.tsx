import React from "react";
import Image from "next/image";
import Link from "next/link";
const notfoundImg = "/assets/images/NotFoundPage.png";
const notFoundPage = () => {
  return (
    <div className="flex items-center h-screen justify-around">
      <div>
        <h1 className="text-6xl font-blackse my-8">GO HOME ,</h1>
        <h1  className="text-6xl font-bold my-8">Youre Drunk</h1>
        <div className="my-8">
          <Link href="/" className="bg-callAction transition-all ease-in-out duration-300 text-white p-4 mt-12 my-8 border-0 px-8 font-black rounded-full w-1/2 hover:bg-transparent hover:border-2 hover:border-callAction">
            {" "}
            Back to Home
          </Link>
        </div>
      </div>
      <div>
        <Image src={notfoundImg} alt="Not Found" width={500} height={500} />
      </div>
    </div>
  );
};

export default notFoundPage;
