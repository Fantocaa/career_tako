import React, { useState } from "react";

const GalleryPage = () => {
    const imageUrls = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    const galleryStyles = {
        display: "grid",
        gap: "16px", // Jarak antara gambar
    };

    // Fungsi ini akan menghitung jumlah kolom berdasarkan lebar layar
    const calculateGridTemplateColumns = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            // Layar lebar, menampilkan 3 kolom
            return "repeat(3, 1fr)";
        } else if (screenWidth >= 640) {
            // Layar sedang, menampilkan 2 kolom
            return "repeat(2, 1fr)";
        } else {
            // Layar kecil, menampilkan 1 kolom
            return "repeat(1, 1fr)";
        }
    };

    galleryStyles.gridTemplateColumns = calculateGridTemplateColumns();

    const imageStyles = {
        width: "300px", // Sesuaikan dengan ukuran yang Anda inginkan
        height: "200px",
        cursor: "pointer",
        objectFit: "cover",
        borderRadius: "5px",
        margin: "10px",
    };

    const openImage = (url) => {
        setSelectedImage(url);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    // Menggunakan event listener untuk mengubah jumlah kolom saat ukuran layar berubah
    window.addEventListener("resize", () => {
        galleryStyles.gridTemplateColumns = calculateGridTemplateColumns();
    });

    return (
        <div className="container mx-auto px-4 md:px-8 xl:px-16 py-8">
            <div className="pb-8">
                <h1 className="text-4xl font-bold text-center">Gallery</h1>
                <p className="text-center py-4">
                    Kami memiliki tempat kerja yang menyenangkan dan penuh
                    semangat. Kami bangga dengan budaya kerja kami yang positif
                    dan produktif. Lihatlah galeri kami untuk mengetahui lebih
                    lanjut!
                </p>
            </div>
            <div style={galleryStyles}>
                {imageUrls.map((url, index) => (
                    <div key={index} onClick={() => openImage(url)}>
                        <img
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {/* Tampilan gambar yang lebih besar */}
            {selectedImage && (
                <div
                    className="modal"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 100,
                        paddingTop: "20px",
                    }}
                    onClick={closeImage}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            objectFit: "contain",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
