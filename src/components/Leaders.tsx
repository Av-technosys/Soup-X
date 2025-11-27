"use client";
import Image from "next/image";
import { useState } from "react";

export default function Leaders() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleOpen = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    const leaders = [
        {
            id: 1,
            name: "VIKAS CHAWLA",
            role: `Managing Director and Chief Executive Officer`,
            img: "/vikas.png",
            description: `Vikas is an inspirational and innovative global leader who has lived and worked in many countries across three continents. He is a seasoned operator who is passionate about building highly engaged, winning teams, and delivering breakthrough growth. Prior to joining Compass, he embarked on an entrepreneurial journey, building the healthy beverage brand Raskik, a coconut water-based juice, and scaling it to over 35,000 outlets.`,
            description1: `He had a long and thoroughly enjoyable journey with The Coca-Cola Company, in diverse leadership roles across India and Europe. He led operations for Coca-Cola in India for 7 years and tripled its retail penetration. His last role in Coca-Cola was as the Managing Director for Southeast Europe, leading the business to double-digit growth across a dozen countries.`,
            description2: ` Vikas believes in leveraging innovation as a key pillar of growth across businesses, including product, packaging, and marketing. Vikas’s passion for social impact has led him back to India after leading various global roles. He holds an MBA degree from the University of South Carolina, Columbia, USA, with Advanced Management Program (AMP) at Harvard Business School, Boston.`

        },
        {
            id: 2,
            name: "JOEL ANTHONY",
            role: "Chief Executive Officer, Support Services",
            img: "/joel.png",
            description: `Joel holds a dynamic career spanning over three decades, he has been instrumental in driving the vision, strategy, and growth for many organisations in start-up and exponential growth environments.`,
            description1: `Prior to Compass, Joel was the Director of Business & Operations at Sodexo where he managed an extensive commercial real estate portfolio in India’s IT / ITeS sector. His professional endeavours include various leadership roles at LG Electronics, General Electric and Philips India.`,
            description2: `An Economics Honours graduate from St. Stephen’s College, Delhi and a postgraduate from IMI, Delhi, Joel is active in various industry and professional bodies and is a member of ISLE, ISHRAE, IFMA and CoreNet.`
        },
        {
            id: 3,
            name: "KRISHNA WAGE",
            role: "Co-Founder & CEO SmartQ, A Compass Group Company",
            img: "/krish.png",
            description: `A successful serial entrepreneur, Krishna Wage infused his innovative spirit into Compass Group India in 2020. Passionate about leveraging technology to enhance human potential, he brings a wealth of experience in building high-performance teams and driving impactful business transformations.`,
            description1: `As the Co-Founder and CEO of Bottle Lab Technologies Pvt. Ltd. (SMARTQ) since December 2014, Krishna has led the B2B food-tech startup in revolutionizing the F&B experience within institutions. Under his leadership, SMARTQ has redefined industry standards, making institutional dining more efficient, tech-driven, and consumer-centric.`,
            description2: `Previously, in 2010, Krishna founded ‘ADing Value’, a media company that provided innovative media channels for impactful campaigns. His entrepreneurial journey also includes a stint as a Life Coach at Quantum Leap.

Krishna’s commitment to exceeding expectations and creating value through diverse ventures reflects his visionary leadership, positioning him at the forefront of technological and business innovation.`
        },
        {
            id: 4,
            name: "DEBASHISH YADAV",
            role: "Chief Executive Officer, ICS Foods – A Compass Group Company",
            img: "/deb.png",
            description: `Debashish is a seasoned leader in the service industry with over a decade of expertise in food and beverage operations. A graduate of Johnson & Wales University, USA, with an MBA from a renowned institution, he has honed his expertise through roles at prestigious establishments like Kimpton Hotels in Boston and the Shangri-La Hotel in Dubai. Since founding the business in 2007,`,
            description1: `Mr. Yadav has been the driving force behind its strategic vision and growth. His leadership emphasises building a team of dedicated professionals and setting new standards for service excellence and innovation.`,
        }
    ];

    return (
        <div className="w-full  mt-10 space-y-6">

            {/* 4 Cards Row */}
            <div className="flex flex-wrap justify-around gap-2">
                {leaders.map((leader) => (
                    <div key={leader.id} className="cursor-pointer">
                        {/* IMAGE */}
                        <Image
                            src={leader.img}
                            width={320}
                            height={250}
                            alt={leader.name}
                            className="shadow-lg"
                        />

                        {/* NAME BOX */}
                        <div className="bg-green-500 max-w-xs text-white border border-green-500 h-40 flex flex-col pt-6 px-4 relative">

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
                <div className="bg-gray-100 border  border-gray-300 transition-all duration-300 p-4 rounded-md text-lg leading-relaxed">
                    <p> {leaders.find((l) => l.id === openId)?.description}</p>
                    <br />
                    <p> {leaders.find((l) => l.id === openId)?.description1}</p>
                    <br />
                    <p> {leaders.find((l) => l.id === openId)?.description2}</p>
                </div>
            )}
        </div>
    );
}
