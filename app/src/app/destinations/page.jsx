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
            <div key={v._id} className="card bg-base-100 shadow-xl rounded-xl overflow-hidden border">
            <figure className="relative">
              <Image width={100} height={100}
                src={v.imageUrl}
                alt={v.destinationName}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-[250px] w-full object-cover rounded-xl"
              />

              {/* Rating */}
              <div className="absolute top-4 right-4 bg-white/50 rounded-xl px-4 py-2 flex items-center gap-2 shadow-md">
                <span className="font-semibold">4.5</span>
                <span>⭐</span>
              </div>
            </figure>

            <div className="p-5 space-y-4">
              {/* Country */}
              <div className="flex items-center gap-2 text-gray-500">
                <span>📍</span>
                <p>{v.country}</p>
              </div>

              {/* Title + Price */}
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">{v.destinationName}</h2>

                <p className="text-3xl font-bold">
                  ${v.price}
                  <span className="text-sm text-gray-500 font-normal">
                    /Person
                  </span>
                </p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-500">
                <span>📅</span>
                <p>
                  {v.duration} Days / {Number(v.duration) - 1} Nights
                </p>
              </div>

              {/* Button */}
              <button className="text-sky-500 text-lg font-semibold flex items-center gap-2 hover:gap-4 duration-300">
                BOOK NOW ↗
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
