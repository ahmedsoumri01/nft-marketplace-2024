import React from "react";
import Image from "next/image";
import Link from "next/link";
const notfoundImg = "/assets/images/NotFoundPage.png";
const notFoundPage = () => {
  return (
    <div className="flex items-center h-screen justify-around">
      <div>
        <h1 className="text-6xl font-blackse ">GO HOME ,</h1>
        <h1  className="text-6xl font-bold">Youre Drunk</h1>
        <div>
          <Link href="/" className="bg-callAction text-white">
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
