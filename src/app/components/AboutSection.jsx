"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-4 items-center py-2 px-4 xl:gap-16 lg:py-36 sm:py-16">
                <div
                    className="rounded-full bg-[#e0d9e0] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-dark">
                    <Image
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src="/images/computertest.png" width={350} height={350} alt="Image d'un avatr sur un ordinateur"/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl text-primary-500 mb-2">A propos</h2>
                    <p className="text-[#075985] lg:text-lg ">
                        IT Soluce, fondée en 2024 par Emmanuel TOUSSAINT jeune entrepreneur dynamique, est une entreprise de dépannage et de maintenance informatique à domicile. Située aux portes des Alpilles, IT Soluce se trouve sur la commune de Saint-Martin-de-Crau dans les Bouches-du-Rhône. Nous proposons des solutions informatiques rapides et fiables pour répondre aux besoins des particuliers et des petites entreprises de la région.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
