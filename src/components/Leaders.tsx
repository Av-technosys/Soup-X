"use client";
import Image from "next/image";
import { useState } from "react";

export default function Leaders() {
    const [openId, setOpenId] = useState(null);

    const toggleOpen = (id: any) => {
        setOpenId(openId === id ? null : id);
    };

    const leaders = [
        {
            id: 1,
            name: "VIKAS CHAWLA",
            role: "Managing Director and Chief Executive Officer",
            img: "/vikas.png",
            description: `Vikas is an inspirational and innovative global leader... (full text)`
        },
        {
            id: 2,
            name: "JOEL ANTHONY",
            role: "Chief Executive Officer, Support Services",
            img: "/joel.png",
            description: `Joel is a seasoned operator...`
        },
        {
            id: 3,
            name: "KRISHNA WAGE",
            role: "Co-Founder & CEO SmartQ, A Compass Group Company",
            img: "/krish.png",
            description: `Krishna has led teams across...`
        },
        {
            id: 4,
            name: "DEBASHISH YADAV",
            role: "Chief Executive Officer, ICS Foods – A Compass Group Company",
            img: "/deb.png",
            description: `Debashish brings extensive experience...`
        }
    ];

    return (
        <div className="w-full mt-10 space-y-6">

            {/* 4 Cards Row */}
            <div className="flex flex-wrap justify-around gap-6">
                {leaders.map((leader) => (
                    <div key={leader.id} className="cursor-pointer">
                        {/* IMAGE */}
                        <Image
                            src={leader.img}
                            width={250}
                            height={250}
                            alt={leader.name}
                            className="shadow-lg"
                        />

                        {/* NAME BOX */}
                        <div className="bg-green-500 text-white border border-green-500 h-40 flex flex-col pt-6 px-4 relative">

                            <h1 className="text-2xl font-bold">{leader.name}</h1>
                            <p className="text-md font-normal">{leader.role}</p>

                            {/* PLUS / CLOSE BUTTON */}
                            <button
                                onClick={() => toggleOpen(leader.id)}
                                className="absolute right-4 top-4 text-3xl font-bold"
                            >
                                {openId === leader.id ? "×" : "+"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESCRIPTION BOX (opens below all cards) */}
            {openId && (
                <div className="bg-gray-100 border border-gray-300 p-6 rounded-md text-lg leading-relaxed">
                    {leaders.find((l) => l.id === openId)?.description}
                </div>
            )}
        </div>
    );
}
