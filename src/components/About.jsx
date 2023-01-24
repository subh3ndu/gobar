import React from 'react';
import { Minus } from './Icons';

const About = () => {
    const paymentOptions = [
        { id: 1, title: 'visa' },
        { id: 2, title: 'mastercard' },
        { id: 3, title: 'paypal' },
    ];
    return (
        <div className="bg-slate-50 px-4 py-8 shadow-sm">
            <h1 className="text-gray-700 text-sm">
                Calling all donut and food pun fans! Keep it cool this summer
                with these adorable shirts, tanks and hoodies!{' '}
                <span className="text-cyan-500 cursor-pointer hover:text-cyan-800">
                    Click here to visit store for more cute tees and tanks!
                </span>
            </h1>
            <div className="my-8 text-sm">
                <h1 className="my-2 font-semibold text-md">HOW TO ORDER:</h1>
                <ol>
                    <li>1. Select the style and color you want:</li>
                    <li>2. Click "Buy it now"</li>
                    <li>3. Select size and quantity</li>
                    <li>4. Enter shipping and billing information</li>
                    <li>5. Done! Simple as that!</li>
                </ol>
            </div>
            <div className="font-light text-sm">
                <h1 className="uppercase mb-4">
                    secure payment guaranteed with:
                </h1>
                <div className="flex">
                    {paymentOptions.map((item) => (
                        <div
                            key={item.id}
                            className="uppercase text-sm flex items-center"
                        >
                            {item.title}
                            {item.id !== paymentOptions.length && <Minus />}
                        </div>
                    ))}
                </div>
                <div className="cursor-pointer text-red-500 mt-10 hover:text-red-800">
                    Show More
                </div>
            </div>
        </div>
    );
};

export default About;
