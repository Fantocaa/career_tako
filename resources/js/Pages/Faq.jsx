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
import HeaderFAQ from "../Components/HeaderFAQ";
import { Link } from "@inertiajs/react";

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
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Dimana saya bisa melihat lowongan pekerjaan yang sedang
                    dibuka?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Anda bisa melihat lowongan pekerjaan di PT. Tako Anugerah
                    Koporasi melalui website{" "}
                    <Link href="/loker" className="text-BlueTako underline">
                        https://karier.tako.co.id/loker
                    </Link>
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Apakah saya bisa melamar lebih dari 1 posisi secara
                    bersamaan?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Bisa, Anda bisa melamar{" "}
                    <span className="font-bold">maksimal 2 posisi</span> {""}
                    secara bersamaan. Jadi, pastikan sesuai dengan kompetensi
                    Anda.
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Saya mengalami kesulitan ketika mengunggah berkas CV
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Pastikan berkas CV yang Anda upload dalam format PDF dengan
                    ukuran maksimal 2 MB.
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Apakah saya bisa mengajukan internship di PT. Tako Anugerah
                    Koporasi?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Tentu bisa, silakan untuk melakukan proses pendaftaran
                    sesuai alurnya. Untuk program silahkan isi dengan nama{" "}
                    <span className="font-bold">Internship</span> dan jangan
                    lupa untuk mengunggah{" "}
                    <span className="font-bold">
                        Surat Pengajuan Internship dan CV dalam 1 dokumen.
                    </span>
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Berapa lama proses rekrutmen di PT. Tako Anugerah Koporasi
                    berlangsung?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Proses rekrutmen di PT. Tako Anugerah Koporasi berlangsung{" "}
                    <span className="font-bold">
                        selama 2 minggu hingga 1 bulan.
                    </span>
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Bagaimana cara mengetahui bahwa lamaran saya diterima?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Lamaran kamu kami terima ketika sudah mengisi semua data dan
                    mengunggah CV yang dibutuhkan. Setelah Anda submit akan
                    muncul tampilan{" "}
                    <span className="font-bold">
                        “Terima Kasih Sudah Melamar”
                    </span>{" "}
                    yang menandakan bahwa lamaran Anda sudah kami terima.
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Apakah ada biaya selama proses rekrutmen di PT. Tako
                    Anugerah Koporasi?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    <span className="font-bold">Tidak ada</span>, proses
                    rekrutmen kami{" "}
                    <span className="font-bold">100% gratis</span>. Jika Anda
                    diminta untuk membayar biaya apa pun, jangan pernah membayar
                    biaya tersebut. Segera laporkan kepada kami melaui di
                    recruitment@tako.co.id
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Apa yang harus saya lakukan jika tidak lolos proses
                    rekrutmen?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Jika Anda tidak lolos proses rekrutmen, jangan berkecil
                    hati. Pelajari apa yang menjadi kekurangan Anda dan lakukan
                    perbaikan. Anda juga dapat mencoba melamar kembali ke
                    perusahaan tersebut di masa depan.
                </div>
            ),
        },

        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Saya tertarik untuk menjadi bagian dari PT. Tako Anugerah
                    Koporasi, namun belum ada lowongan posisi yang cocok. Apakah
                    saya bisa mengirimkan CV saya terlebih dahulu?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    <span className="font-bold">Tentu bisa</span>. Silakan untuk
                    mengisi data lowongan pekerjaan dan mengirimkan CV Anda.
                    Kami akan menyimpan data Anda dan menghubungi dikemudian
                    hari jika terdapat posisi yang kami rasa cocok dengan Anda.
                </div>
            ),
        },
        {
            question: (
                <div className="text-xs md:text-base 2xl:text-lg leading-5">
                    Apabila saya ada kendala lainnya, saya harus menghubungi
                    siapa?
                </div>
            ),
            answer: (
                <div className="opacity-90 text-xs md:text-base 2xl:text-lg leading-5">
                    Anda bisa menghubungi kami melalui recruitment@tako.co.id
                    dengan{" "}
                    <span className="font-bold">subjek Rekrutmen_Nama</span>.
                    Lalu sampaikan dan sertakan tangkapan layarnya dari kendala
                    yang Anda temukan.
                </div>
            ),
        },
    ];

    return (
        <Layout pageTitle="FAQ | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16 min-h-screen flex flex-col">
                <NavElse />
                <HeaderFAQ />
                <div className="container mx-auto px-8 xl:px-16 2xl:px-32 py-16 pt-28 md:pt-16">
                    <div className="bg-white p-4 rounded-lg py-8">
                        <div className="pb-8 p-4 rounded-lg">
                            {/* <h1 className="text-center font-bold text-2xl md:text-4xl ">
                                Frequently Asked Question
                            </h1> */}
                            <h1 className="text-center text-xs md:text-base 2xl:text-2xl pt-4 font-semibold">
                                Apa yang ingin Anda ketahui tentang kami?
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
