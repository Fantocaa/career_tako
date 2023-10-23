import React, { useState, useEffect } from "react";
import Footer from "@/Components/Shared/Footer";
import HeaderIntern from "@/Components/HeaderIntern";
import NavElse from "@/Components/Shared/Else/NavElse";
import SelectJobIntern from "@/Components/Shared/Job/SelectJobIntern";
import Layout from "@/Layouts/Layout";

const Internship = () => {
    // const [jobs, setJobs] = useState([]); // Data pekerjaan
    // const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
    // const jobsPerPage = 5; // Jumlah pekerjaan per halaman

    // const indexOfLastJob = currentPage * jobsPerPage;
    // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    // const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // useEffect(() => {
    //     // Ambil data pekerjaan dari sumber data atau API di sini
    //     // Misalnya, menggunakan useEffect untuk mengambil data ketika komponen dimuat.
    //     // Simpan data pekerjaan ke dalam state 'jobs'.
    //     // Buat panggilan API ke 'http://127.0.0.1:8000/form/view_intern' di sini
    //     fetch("/form/view_intern")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // Simpan data pekerjaan ke dalam state 'jobs'
    //             setJobs(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, []); // Daftar dependensi kosong, jadi useEffect hanya akan dipanggil sekali saat komponen dimuat.

    return (
        <Layout pageTitle="Internship | Tako Karir">
            <section>
                <NavElse />
                <HeaderIntern />
                <div className="bg-BgTako text-DarkTako font-inter">
                    <div className=" w-full py-16 px-4 md:px-8 lg:px-8 xl:px-24 2xl:px-16 container mx-auto">
                        <div className="container mx-auto justify-center">
                            <h1 className="text-center font-bold text-2xl">
                                Pekerjaan yang tersedia
                            </h1>
                            <p className="text-center pt-2">
                                Pilih sesuai dengan kriteria kamu
                            </p>
                        </div>
                        <div className="pt-8 md:grid grid-cols-2 gap-4">
                            <SelectJobIntern />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </Layout>
    );
};

export default Internship;
