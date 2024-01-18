import React from "react";

const HeaderFAQ = () => {
    return (
        // <div className="bg-BlueTako text-white font-inter w-full py-16 md:py-8">
        //     <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:py-24">
        //         <div className="md:flex gap-8 2xl:gap-16 items-center">
        //             <div className="md:w-[65%]">
        //                 <h1 className="font-bold text-3xl lg:text-4xl 2xl:text-[40px] pt-14 md:pt-8 w-[90%] md:w-full">
        //                     <span className="text-YellowTako">FAQ</span>{" "}
        //                     (Frequently Asked Question)
        //                 </h1>
        //                 <p className="text-xs md:text-base 2xl:text-lg pt-2 lg:pt-4 2xl:pt-6">
        //                     Temukan informasi lengkap dan jawaban untuk
        //                     pertanyaan-pertanyaan umum agar memahami lebih
        //                     lanjut tentang proses rekrutmen dan peluang
        //                     berkarier bersama kami.
        //                 </p>
        //                 {/* <img
        //                     src="/images/bg.jpg"
        //                     alt=""
        //                     className="absolute inset-0 w-full h-full object-cover"
        //                     style={{
        //                         opacity: "0.1", // Sesuaikan tingkat opacity sesuai keinginan Anda
        //                     }}
        //                 /> */}
        //             </div>
        //             <div className="hidden md:block w-full md:w-1/2 lg:block">
        //                 <img
        //                     src="/images/faq.svg"
        //                     alt="faq"
        //                     className="lg:scale-125"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="text-white font-inter w-full relative">
                <img
                    src="/images/photo/frame_463.webp"
                    alt="loker"
                    className="w-full h-[480px] md:h-[640px] object-cover object-top"
                />
                <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 md:py-24 absolute top-0 bottom-0 left-0 right-0 flex items-center">
                    <div className="md:flex gap-8 2xl:gap-16 items-center">
                        <h1 className="font-bold text-3xl lg:text-4xl 2xl:text-[40px] pt-14 md:pt-8 w-[90%] md:w-full">
                            FAQ (Frequently Asked Question)
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderFAQ;
