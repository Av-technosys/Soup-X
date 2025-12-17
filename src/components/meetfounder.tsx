"use client";
import Image from "next/image";

const founders = [
    { name: "Uttam Kumar", role: "Founder & CEO", image: "/uttam.png" },
    { name: "Priyank Jain", role: "Co-Founder", image: "/priyank.png" },
    { name: "Ajay Tanwar", role: "Director & COO", image: "/user.png" },
];

const advisors = [
    { name: "Ashish Mittal", image: "/ashish.png" },
    { name: "Dr. Sanjay Jaiswal", image: "/sanjay.png" },
    { name: "Dr. Sukrit Kumar", image: "/sukrit.png" },
];

const coreTeam = [
     { name: "Vineeta Singh", image: "/vineeta.png" },
    { name: "Shakti Swami", image: "/shakti.png" },
     { name: "Deepak Verma", image: "/deepak.png" },
    { name: "Pushpendra Tiwari", image: "/user.png" },
    { name: "Chetan Dubey", image: "/user.png" },
];

const backing = [
    {
        title: "Bread Management Company – Barkens",
        image: "/barkens.png",
    },
    {
        title: "Jasper Foods",
        image: "/jasper.png",
    },
     {
        title: "Full Backed Food Management Company",
        image: "/user.png",
    },
    {
        title: "Backed by Shark Tank India",
        image: "/user.png",
    },
   
    
];

export default function TeamSection() {
    return (
        <section className="py-15 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* FOUNDERS */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Founders & Leadership
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-14">
                    {founders.map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={160}
                                    height={160}
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="mt-6 text-xl font-semibold">{item.name}</h4>
                            <p className="text-gray-600">{item.role}</p>
                        </div>
                    ))}
                </div>

                {/* ADVISORS */}
                <h2 className="text-3xl font-bold text-center mb-10">
                    Advisors & Investors
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-14">
                    {advisors.map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={128}
                                    height={128}
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="mt-5 text-lg font-semibold">{item.name}</h4>
                            <p className="text-gray-600">Advisor</p>
                        </div>
                    ))}
                </div>

                {/* CORE TEAM */}
                <h2 className="text-3xl font-bold text-center mb-10">
                    Core Team
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-14">
                    {coreTeam.map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={112}
                                    height={112}
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="mt-4 text-base font-semibold">{item.name}</h4>
                        </div>
                    ))}
                </div>

                {/* BACKING */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Backing & Associations
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {backing.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-28 h-28 rounded-full overflow-hidden shadow-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={112}
                                    height={112}
                                    className="object-contain p-4"
                                />
                            </div>
                            <p className="mt-4 font-medium text-gray-700">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
