import React from 'react';
import FormData from './FormData';

const Order = () => {
    const [image, setImage] = React.useState();
    return (
        <>
            <div className="w-full flex flex-col items-center">
                <h1 className="font-medium md:text-4xl md:font-bold">
                    Donut Worry, Be Happy - Food Puns
                </h1>
                <h2 className="text-gray-400 font-light text-sm my-2">
                    Created by{' '}
                    <span className="underline text-gray-600 font-medium">
                        Sarah Haynes
                    </span>
                </h2>
            </div>
            <div>
                <img src="/hoodie/front/black.jpg" alt="" />
            </div>
            <FormData />
        </>
    );
};

export default Order;
