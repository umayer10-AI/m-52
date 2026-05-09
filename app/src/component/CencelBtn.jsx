"use client"
import { XCircle } from 'lucide-react';
import React from 'react';

const CencelBtn = ({id}) => {

    const a = async () => {
        const res = await fetch(`http://localhost:5000/destinations/${id}`,{
            method: "DELETE"
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <button onClick={a} className="flex items-center px-6 py-2 border border-red-200 text-red-500 rounded-md hover:bg-red-50 transition-colors">
            <XCircle className="w-4 h-4 mr-2" /> Cancel
          </button>
    );
};

export default CencelBtn;