"use client";
import {services} from "./constant/index";

export default function HealthcareServices() {
    return (
        <section className="py-4 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 m-20 justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
                {services.map((service, index) => (
                    <a
                    key={index}
                    href={service.link}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white dark:bg-gray-800 group"
                    >
                    <service.icon className="w-12 h-12 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-base font-medium text-center text-gray-800 dark:text-white">
                        {service.title}
                    </p>
                    </a>
                ))}
                </div>
            </div>
        </section>
    );
}
