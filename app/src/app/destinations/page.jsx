import React from 'react';

const page = async () => {

    const res = await fetch(`http://localhost:5000/destinations`)
    const data = await res.json()

    return (
        <div>
            <h2>Data: {data.length}</h2>
        </div>
    );
};

export default page;