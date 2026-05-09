import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const res = await fetch(`http://localhost:5000/destinations/${id}`)
    const data = await res.json()
    console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default page;