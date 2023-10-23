import React from "react";

const PerusahaanCard = () => {
    return (
        <div className="bg-white p-6 rounded-xl text-DarkTako cursor-pointer">
            <img src="/images/logo/tako.png" alt="" className="mx-auto" />
            <h3 className="font-semibold">PT. TAKO ANUGERAH KOPORASI</h3>
            <p className="text-DarkTako text-opacity-75 ">
                20 Lowongan Tersedia
            </p>
        </div>
    );
};

export default PerusahaanCard;
