import Carts from "@/component/Carts";
import Image from "next/image";
import React from "react";

const page = async () => {
  const res = await fetch(`http://localhost:5000/destinations`);
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h2 className="text-3xl font-bold my-5">Explore All Destinations</h2>
      <div className="grid grid-cols-3 gap-5">
        {data.map((v) => (
            <Carts key={v._id} v={v}></Carts>
        ))}
      </div>
    </div>
  );
};

export default page;
