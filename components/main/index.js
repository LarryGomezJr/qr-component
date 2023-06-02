import React from "react";
import Image from "next/image";

function Main() {
  return (
    <div className="md:w-1/4 bg-white flex flex-col p-4 rounded-2xl items-center mx-7">
      <Image
        className="rounded-lg"
        src="/image-qr-code.png"
        width={300}
        height={300}
        alt="img"
      />
      <h1 className="pt-3 px-6 font-bold text-xl text-center text-slate-600">
        Improve your front-end skills by building projects
      </h1>
      <p className="p-2 text-center text-sm font-sm text-gray-400">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default Main;
