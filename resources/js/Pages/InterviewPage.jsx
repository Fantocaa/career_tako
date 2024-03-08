import React from "react";
import "../style.css";

const InterviewPage = () => {
    return (
        <div className="container max-w-[1440px] mx-auto px-4 py-8 md:px-8 xl:px-16 2xl:px-32 pt-16 lg:pt-32 ">
            <div className="w-full flex bg-BlueTako p-8 py-16 rounded-xl gap-8">
                <div className="w-[40%]">
                    <h1 className="text-4xl font-bold text-white">
                        Kamu adalah{" "}
                        <span className="text-YellowTako">Talenta Terbaik</span>{" "}
                        yang Kami Cari!
                    </h1>
                    <p className="text-white w-[95%] py-8">
                        Bergabunglah dengan kami untuk mengejar impian bersama
                        PT. TAKO ANUGERAH KOPORASI! Kamu adalah Talenta Terbaik
                        yang kami cari untuk membangun masa depan yang gemilang.
                        Bersama, kita akan menciptakan inovasi, menghadirkan
                        solusi kreatif, dan menjalani perjalanan karier yang
                        penuh prestasi. Jadi, siap untuk menjadi bagian dari tim
                        unggul kami? Ayo, bergabung dan wujudkan potensimu
                        bersama PT. TAKO ANUGERAH KOPORASI!
                    </p>
                    <button
                        className="bg-white hover:opacity-75 hover:text-BlueTako fill-white hover:fill-BlueTako py-3 px-4 rounded-xl text-BlueTako flex gap-4 items-center transition-all duration-300 ease-in-out font-semibold shadow-sm"
                        // data-aos="fade-up"
                        // data-aos-duration="1000"
                    >
                        Kembangkan diri Anda!
                    </button>
                </div>
                <div className="bg-white p-4 rounded-xl">
                    <iframe
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/KKKd_aEVdew?si=j1QnnuwK_YtTtFf6"
                        title="PT. TAKO ANUGERAH KOPORASI - Interview with MANAGER"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="rounded-xl"
                    ></iframe>
                </div>
                {/* <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
                    style={{
                        backgroundImage: "url(images/SCL_1333.JPG)",
                        zIndex: -1,
                    }}
                ></div> */}
            </div>
        </div>
    );
};

export default InterviewPage;
