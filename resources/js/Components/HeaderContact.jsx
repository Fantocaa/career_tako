import React from "react";

const HeaderContact = () => {
    return (
        <>
            <div className="text-white font-inter w-full relative">
                <img
                    src="/images/photo/frame_463.webp"
                    alt="loker"
                    className="w-full h-[480px] md:h-[640px] object-cover object-top"
                />
                <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:py-24 absolute top-0 bottom-0 left-0 right-0 flex items-center">
                    <div className="md:flex gap-8 2xl:gap-16 items-center">
                        <h1 className="font-bold text-3xl lg:text-4xl 2xl:text-[40px] pt-14 md:pt-8 w-full md:w-full">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderContact;
