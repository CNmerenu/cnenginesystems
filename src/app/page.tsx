import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center bg-primary-500 ">
        <div className="w-full md:w-[1440px] h-full flex flex-col items-center justify-center gap-10">
          <h1 className="text-white text-3xl md:text-5xl font-black text-center">
            We&apos;re Coming Soon!
          </h1>
          <Link
            href={"/"}
            className="text-white text-2xl underline cursor-pointer"
          >
            www.thesmecfo.co
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
