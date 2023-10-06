import React from "react";

const Gallery = () => {
    // Daftar URL gambar
    const imageUrls = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
    ];

    const galleryStyles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    };

    const imageStyles = {
        width: "300px", // Sesuaikan dengan ukuran yang Anda inginkan
        height: "200px",
        margin: "10px",
        objectFit: "cover",
        borderRadius: "5px",
    };

    return (
        <div className="gallery" style={galleryStyles}>
            {imageUrls.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt={`Image ${index + 1}`}
                    style={imageStyles}
                />
            ))}
        </div>
    );
};

export default Gallery;
