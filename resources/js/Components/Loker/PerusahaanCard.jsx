import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import Axios from "axios";

const PerusahaanCard = ({ data }) => {
    const [formData, setFormData] = useState([]);
    const [formDataLoker, setFormDataLoker] = useState([]);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    useEffect(() => {
        // Panggil fungsi API di sini saat komponen pertama kali di-mount
        const fetchData = async () => {
            try {
                // Kirim data ke server
                const response = await Axios.get("/json_perusahaan");
                setFormData(response.data);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };

        // const fetchDataLoker = async () => {
        //     try {
        //         // Kirim data ke server
        //         const response_2 = await Axios.get("/form");
        //         setFormDataLoker(response_2.data);
        //     } catch (error) {
        //         console.error("Error sending data:", error);
        //     }
        // };

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount
        // fetchDataLoker(); // Panggil fungsi fetchDataLoker saat komponen di-mount
    }, []);

    // Fungsi untuk menghitung jumlah total lowongan pekerjaan
    const hitungJumlahLowongan = (perusahaanId) => {
        // Filter data dari formDataLoker berdasarkan perusahaanId dan hitung jumlahnya
        const totalLowongan = formDataLoker.filter(
            (item) => item.perusahaan_id === perusahaanId
        ).length;

        return totalLowongan;
    };

    // console.log(item.id);

    return (
        // <>
        //     {formData.map((item) => (
        //         <Link href={`/loker/perusahaan/${item.id}`}>
        //             <div
        //                 className="bg-white p-6 rounded-xl text-DarkTako cursor-pointer h-full"
        //                 key={item.id}
        //             >
        //                 <img
        //                     src={`/storage/images/${item.image}`}
        //                     alt="logo perusahaan"
        //                     className="mx-auto w-32 h-32 object-contain"
        //                 />
        //                 <div className="flex flex-col h-24 justify-between">
        //                     <h3 className="font-semibold pt-4 overflow-hidden">
        //                         {item.perusahaan}
        //                     </h3>
        //                     <p className="text-DarkTako text-opacity-75 bottom-0">
        //                         {/* {hitungJumlahLowongan(item.id)} Lowongan
        //                         Tersedia */}
        //                         {hitungJumlahLowongan} Lowongan Tersedia
        //                     </p>
        //                 </div>
        //             </div>
        //         </Link>
        //     ))}
        // </>

        <>
            {data.map((item) => (
                <Link key={item.id} href={`/loker/perusahaan/${item.id}`}>
                    <div className="bg-white p-6 rounded-xl text-DarkTako cursor-pointer h-full">
                        <img
                            src={`/storage/images/${item.image}`}
                            alt="logo perusahaan"
                            className="mx-auto w-32 h-32 object-contain"
                        />
                        <div className="flex flex-col h-24 justify-between">
                            <h3 className="font-semibold pt-4 overflow-hidden">
                                {item.perusahaan}
                            </h3>
                            <p className="text-DarkTako text-opacity-75 bottom-0">
                                {/* Tampilkan jumlah lowongan langsung */}
                                {item.jumlahLowongan} Lowongan Tersedia
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default PerusahaanCard;
