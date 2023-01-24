import React from 'react';
import { Down } from './Icons';

const FormData = () => {
    return (
        <div className="bg-slate-50 p-4">
            <form>
                <label>
                    <h1 className="text-xs my-4 font-bold">
                        Available Products:
                    </h1>
                    <select className="p-4 w-full">
                        <option value="Ford">
                            Sticker - Landscape - US $6.30 USD
                        </option>
                        <option value="Volvo" selected>
                            Comfort Tee - US $22.99 USD
                        </option>
                        <option value="Fiat">
                            Classic Pullover Hoodle - US $38.99 USD
                        </option>
                    </select>
                </label>

                <div className="my-4">
                    <h1 className="text-xs font-bold">Description:</h1>
                    <p className="text-xs">Classic fit, unisex</p>
                </div>

                <p className="flex items-center text-cyan-500 text-xs mb-5">
                    Show More Details <Down />
                </p>

                <div className="flex">
                    <label className="w-30">
                        <h1 className="text-xs font-bold my-2">Select Size:</h1>
                        <select className="p-2">
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">2XL</option>
                            <option value="">3XL</option>
                            <option value="">4XL</option>
                            <option value="">5XL</option>
                            <option value="" disabled>
                                LT
                            </option>
                            <option value="" disabled>
                                XLT
                            </option>
                            <option value="" disabled>
                                2XLT
                            </option>
                            <option value="" disabled>
                                3XLT
                            </option>
                            <option value="" disabled>
                                4XLT
                            </option>
                        </select>
                    </label>
                    <label className="w-30 mx-5" for="quantity">
                        <h1 className="text-xs font-bold my-2">Quantity:</h1>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            max="1000"
                            value="1"
                            step="1"
                            className="p-2 w-20"
                        />
                    </label>
                </div>
                <h1 className="text-xs font-bold my-2">Colors:</h1>
                <div className="flex space-x-2 cursor-pointer">
                    <div className="rounded-full w-10 h-10 bg-black"></div>
                    <div className="rounded-full w-10 h-10 bg-indigo-900"></div>
                    <div className="rounded-full w-10 h-10 bg-blue-900"></div>
                    <div className="rounded-full w-10 h-10 bg-violet-900"></div>
                </div>
            </form>
        </div>
    );
};

export default FormData;
