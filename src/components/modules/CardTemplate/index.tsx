import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface CardTemplateProps {
    title: string;
    description: React.ReactNode;
    technologies: string[];
    images: string[];
    color: {
        via: string;
        to: string;
    };
}

function CardTemplate({ title, description, technologies, images, color }: CardTemplateProps) {
    const technologiesString = technologies.join(' \u00A0 '); // \u00A0 is the Unicode for non-breaking space

    // Construct the gradient color style
    const gradientStyle = `bg-gradient-to-b md:bg-gradient-to-r from-zinc-900 from-30% ${color.via} via-60% ${color.to} to-90% flex flex-col md:flex-row w-full mb-5 gap-5 ring ring-zinc-800 rounded-2xl p-4 h-full overflow-hidden`;

    return (
        <div className={gradientStyle}>
            <div className="w-full md:w-1/2">
                <h3 className="text-black dark:text-white font-semibold text-xl pb-5">{title}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4 text-base">{description}</p>
                <span className="text-gray-700 dark:text-gray-200 italic mr-2 last:mr-0 text-xs">
                    {technologiesString}
                </span>
            </div>

            <div className="w-full max-w-lg md:w-1/2">
                <Carousel
                    useKeyboardArrows={true}
                    autoPlay={true}
                    interval={1700}
                    infiniteLoop={true}
                    showThumbs={false}
                    swipeable={true}
                >
                    {images.map((URL, index) => (
                        <Image
                            alt="Project Image"
                            src={URL}
                            width={400}
                            height={300}
                            key={index}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default CardTemplate