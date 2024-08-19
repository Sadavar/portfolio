import React, { useState, useRef, useEffect } from 'react';
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

const CardTemplate = ({ title, description, technologies, images, color }: CardTemplateProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    const technologiesString = technologies.join(' \u00A0 '); // \u00A0 is the Unicode for non-breaking space

    // Construct the gradient color style
    const gradientStyle = `bg-gradient-to-b md:bg-gradient-to-r from-zinc-900 from-30% ${color.via} via-60% ${color.to} to-90% flex flex-col md:flex-row w-full mb-5 gap-5 ring ring-zinc-800 rounded-2xl p-4 h-full overflow-hidden`;

    useEffect(() => {
        // Check if the description is too long on mount
        const handleResize = () => {
            if (descriptionRef.current) {
                setIsTruncated(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [description]);

    return (
        <div className={gradientStyle}>
            <div className="w-full md:w-1/2">
                <h3 className="text-black dark:text-white font-semibold text-xl pb-2">{title}</h3>
                <div className="pb-5">
                    <span className="text-gray-700 dark:text-gray-200 italic mr-2 last:mr-0 text-xs">
                        {technologiesString}
                    </span>
                </div>

                <p
                    className={`text-gray-700 dark:text-gray-200 mb-4 text-base hidden md:block`}
                    ref={descriptionRef}
                >
                    {description}
                </p>
                <p
                    className={`text-gray-700 dark:text-gray-200 mb-4 text-base md:hidden ${!isExpanded ? 'line-clamp-4' : ''}`}
                    ref={descriptionRef}
                >
                    {description}
                </p>

                <div className="flex justify-center md:hidden mt-2">
                    <button
                        className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                        onClick={() => setIsExpanded(prev => !prev)}
                    >
                        <div className="flex items-center">
                            <h1 className='pr-1'>
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </h1>
                            {isExpanded ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px" height="20px" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}


                        </div>
                    </button>
                </div>
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
};

export default CardTemplate;
