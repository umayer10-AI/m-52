import React from 'react';
import { MapPin, Calendar, Star, CheckCircle2, ArrowLeft, Edit3, XCircle, ArrowRight } from 'lucide-react';
import CencelBtn from '@/component/CencelBtn';

const page = async ({params}) => {

    const {id} = await params
    const res = await fetch(`http://localhost:5000/destinations/${id}`)
    const data = await res.json()
    console.log(data)

    return (
        <div>
            <div className="min-h-screen bg-gray-50 pb-12 font-sans">
      {/* Top Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <button className="flex items-center text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Destinations
        </button>
        <div className="flex gap-3">
          <button className="flex items-center text-black px-6 py-2 border rounded-md hover:bg-gray-100 transition-colors">
            <Edit3 className="w-4 h-4 mr-2" /> Edit
          </button>
          <CencelBtn id={data._id}></CencelBtn>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4">
        {/* Banner Image */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden mb-10 shadow-lg">
          <img 
            src={data.imageUrl} 
            alt={data.destinationName} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {data.country}
              </div>
              <h1 className="text-5xl font-bold text-gray-900">{data.destinationName}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current mr-1" />
                  <span className="font-semibold text-gray-800">4.9</span>
                  <span className="text-gray-400 ml-1">(234 reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-1" />
                  <span className="font-medium">{data.duration}</span>
                </div>
              </div>
            </div>

            <section>
              <h3 className="text-2xl font-bold mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.description}. Experience the majestic beauty of the {data.category} landscape. 
                This package offers a unique blend of adventure and tranquility in the heart of {data.country}.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Premium mountain view accommodation",
                  "Guided trekking excursions",
                  "Local cultural experiences",
                  "Traditional dining experiences",
                  "All transportation included"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl sticky top-8">
              <div className="mb-6">
                <p className="text-gray-500 text-sm">Starting from</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-cyan-600">${data.price}</span>
                  <span className="text-gray-400 ml-1 font-medium">/ per person</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium">
                  {data.departureDate}
                </div>
              </div>

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 group">
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Free cancellation up to 7 days
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Travel insurance included
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  24/7 customer support
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
        </div>
    );
};

export default page;