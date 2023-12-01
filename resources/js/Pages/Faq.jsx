import React from "react";
import Navbar from "@/Components/Shared/Homepage/Navbar";
import Footer from "@/Components/Shared/Footer";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import NavElse from "@/Components/Shared/Else/NavElse";
import Layout from "@/Layouts/Layout";
import { useEffect, useState } from "react";

const Faq = () => {
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        // Lakukan permintaan AJAX untuk mendapatkan data perusahaan
        const fetchData = async () => {
            try {
                const response = await fetch("/time_expired"); // Ganti dengan rute yang sesuai
                const result = await response.json();
                setData(result);
                // setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                // setLoading(false);
            } finally {
                setIsPageLoaded(true);
            }
        };

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount
    }, []); // Dependensi kosong agar hanya dipanggil sekali

    const AccordionContainer = styled.div`
        width: 100%;
        /* ... */
        .MuiAccordionSummary-root {
            background-color: #ffffff; /* Ganti dengan warna latar belakang yang Anda inginkan */
            color: #1e1e1e; /* Ganti dengan warna teks yang Anda inginkan */
        }
        .MuiAccordionDetails-root {
            background-color: #ffffff; /* Ganti dengan warna latar belakang yang Anda inginkan */
            color: #555; /* Ganti dengan warna teks yang Anda inginkan */
            padding: 16px; /* Ganti dengan ukuran padding yang Anda inginkan */
        }
        .MuiAccordion-root {
            border: 0px solid #ddd; /* Ganti dengan properti border yang Anda inginkan */
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1); /* Ganti dengan properti shadow yang Anda inginkan */
        }
    `;
    const faqData = [
        {
            question: (
                <div className="text-xs md:text-base leading-5">
                    Apa saja tahapan dalam proses rekrutmen perusahaan?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base leading-5">
                    Secara umum, tahapan dalam proses rekrutmen perusahaan PT
                    Tako Anugerah Koporasi adalah sebagai berikut:
                    <br />
                    <br />
                    <div>
                        - Initial selection: Tahapan ini dilakukan untuk
                        memverifikasi kelengkapan dokumen dan kualifikasi
                        pelamar serta terdapat tes teknikal.
                        <br /> <br />- Second Interview: Tahapan ini dilakukan
                        untuk menilai kemampuan dan keterampilan pelamar.
                    </div>
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base leading-5">
                    Berapa lama proses rekrutmen perusahaan berlangsung?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base leading-5">
                    Secara umum, proses rekrutmen perusahaan dapat berlangsung
                    selama dua minggu hingga satu bulan untuk menyelesaikan
                    proses rekrutmen perusahaan
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base leading-5">
                    Bagaimana cara mengetahui bahwa lamaran saya diterima?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base leading-5">
                    Secara umum, proses rekrutmen perusahaan dapat berlangsung
                    selama dua minggu hingga satu bulan untuk menyelesaikan
                    proses rekrutmen perusahaan
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base leading-5">
                    Apakah ada biaya yang harus saya keluarkan untuk mengikuti
                    proses rekrutmen?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base leading-5">
                    Proses rekrutmen di perusahaan kami{" "}
                    <span className="font-bold">tidak dipungut biaya.</span>
                    Jika ada perusahaan yang mengatas namakan PT TAKO ANUGERAH
                    KOPORASI yang meminta biaya untuk mengikuti proses
                    rekrutmen, sebaiknya Anda waspada.
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base leading-5">
                    Apa yang harus saya lakukan jika saya tidak lolos proses
                    rekrutmen?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base leading-5">
                    Jika Anda tidak lolos proses rekrutmen, jangan berkecil
                    hati. Pelajari apa yang menjadi kekurangan Anda dan lakukan
                    perbaikan. Anda juga dapat mencoba melamar kembali ke
                    perusahaan tersebut di masa depan.
                </div>
            ),
        },
    ];

    return (
        <Layout pageTitle="FAQ | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
                <NavElse />
                <div className="container flex-wrap mx-auto px-8 xl:px-16 2xl:px-32 py-16 pt-28 md:pt-16 justify-between">
                    <div className="bg-white p-4 rounded-lg py-8">
                        <div className="pb-8 p-4 rounded-lg">
                            <h1 className="text-center font-bold text-2xl md:text-4xl ">
                                FAQ
                            </h1>
                            <h1 className="text-center text-xs md:text-base pt-4">
                                Apa yang ingin kamu ketahui tentang kami?
                            </h1>
                        </div>

                        <AccordionContainer>
                            {faqData.map((faq, index) => (
                                <Accordion key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${
                                            index + 1
                                        }a-content`}
                                        id={`panel${index + 1}a-header`}
                                    >
                                        <Typography>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{faq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AccordionContainer>
                    </div>
                </div>
                <Footer />
            </section>
        </Layout>
    );
};

const AccordionContainer = styled.div`
    width: 100%;
    // max-width: 800px; /* Atur sesuai kebutuhan */
    margin: 0 auto;
    /* Set rounded using CSS custom properties */
    :root {
        --accordion-rounded: 20px;
    }

    /* Apply rounded to the container */
    border-radius: var(--accordion-rounded);
`;

export default Faq;
