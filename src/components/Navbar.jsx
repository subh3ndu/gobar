import React from 'react';
import { Chevron } from './Icons';

const Navbar = () => {
    const items = [
        { id: 1, name: 'Shop' },
        { id: 2, name: 'Apparel' },
        { id: 3, name: 'Hobbies' },
        { id: 4, name: 'Food' },
    ];
    return (
        <nav className="flex sticky top-0 bg-white pl-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="h-16 flex items-center text-gray-400 text-sm"
                >
                    <h1 className="px-2 hover:text-cyan-200 cursor-pointer font-light">
                        {item.name}
                    </h1>
                    {item.id !== items.length && <Chevron />}
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
