import React, { useState, useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fungsi untuk menggulir kembali ke atas halaman
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Untuk animasi gulir
            duration: 1000,
        });
    };

    // Fungsi untuk memantau posisi scroll dan menampilkan/tutup tombol "Back to Top"
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Tambahkan event listener untuk mengikuti posisi scroll
    // window.addEventListener("scroll", handleScroll);
    useEffect(() => {
        // Tambahkan event listener untuk mengikuti posisi scroll
        window.addEventListener("scroll", handleScroll);

        // Bersihkan event listener ketika komponen dilepas
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Dependensi kosong berarti efek ini hanya berjalan sekali (pada mount)

    return (
        <div
            className={`fixed back-to-top  bottom-16 right-8 2xl:right-14 hidden lg:block ${
                isVisible ? "visible" : "hidden"
            }`}
        >
            <button onClick={scrollToTop}>
                <div>
                    <img
                        src="/images/arrow-circle-up.svg"
                        alt="BackToTop"
                        className="scale-[2.0]"
                    />
                </div>
            </button>
        </div>
    );
};

export default BackToTop;
