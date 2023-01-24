import React from 'react';
import { Warn } from './Icons';

const Footer = () => {
    const months = [
        { title: 'January', days: 31 },
        { title: 'February', days: 28 },
        { title: 'March', days: 31 },
        { title: 'April', days: 30 },
        { title: 'May', days: 31 },
        { title: 'June', days: 30 },
        { title: 'July', days: 31 },
        { title: 'August', days: 31 },
        { title: 'September', days: 30 },
        { title: 'October', days: 31 },
        { title: 'November', days: 30 },
        { title: 'December', days: 31 },
    ];

    const date = new Date();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let displayDate = currentDate + 7;
    let displayMonth = currentMonth;
    if (displayDate > months[currentMonth].days) {
        displayMonth++;
        displayDate = displayDate - months[currentMonth].days;
    }

    return (
        <div className="bg-slate-50 px-4 py-8 shadow-sm">
            <h1 className="my-4 font-semibold text-sm">Delivery details</h1>
            <div className="text-xs">
                <div className="py-2">All products are printed to order.</div>
                <div className="py-2">
                    If you place your order now, it will ship on or before{' '}
                    {months[displayMonth].title} {displayDate}
                    {', '}
                    {currentYear}
                    {'. '}
                </div>
                <div className="py-2">
                    Please allow additional 6 - 9 business days for stanard
                    shipping
                </div>
                <div className="py-2">
                    Expedited or Rush shipping may be available depending upon
                    the prouct(s) selected and the destination country.
                </div>
                <div className="py-2">
                    Shipping costs start at:
                    <ul className="py-2 indent-6">
                        <ul>
                            US$13.50 for the first apparel item and US$4.00 for
                            each additional apparel item.
                        </ul>
                        <ul>
                            US$3.50 for the first sticker and US$0.25 for each
                            additional sticker.
                        </ul>
                    </ul>
                </div>
                <div className="py-2">Products are fulfilled in the US</div>
            </div>
            <h1 className="my-4 font-semibold text-sm">Return Policy</h1>
            <div className="text-xs py-2">
                If you're not 100% satisfied with your physical order, let us
                know and we'll make it right. Learn more about our return policy{' '}
                <a
                    href="#"
                    className="text-cyan-600 text-xs my-4 font-bold cursor-pointer"
                >
                    here
                </a>
                .
            </div>

            <h1 className="my-4 font-semibold text-sm">Campaign ID</h1>
            <div
                className="py-2 
            text-xs"
            >
                donut-worry-food-puns
            </div>

            <div className="text-cyan-600 text-xs my-4 font-bold cursor-pointer">
                Report this listing
            </div>
            <hr />

            <footer className="font-semibold text-center mt-8 flex justify-center cursor-pointer">
                <Warn />
                <span className="ml-2">Report this product</span>
            </footer>
        </div>
    );
};

export default Footer;
