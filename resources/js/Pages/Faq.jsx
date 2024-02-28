import React from "react";
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
import BackToTop from "@/Components/BackToTop";
import Nav from "@/Components/Shared/Homepage/Nav";

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

import { useTranslation } from "react-i18next";

const Faq = () => {
    const [data, setData] = useState([]); // State untuk data perusahaan
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const { t } = useTranslation(); // Tambahkan ini

    useEffect(() => {
        // Lakukan permintaan AJAX untuk mendapatkan data perusahaan
        const fetchData = async () => {
            try {
                const response = await fetch("/api/time_expired"); // Ganti dengan rute yang sesuai
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
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Dimana saya bisa melihat lowongan pekerjaan yang sedang
                    dibuka? */}
                    {t("question.1")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Anda bisa melihat lowongan pekerjaan di PT. Tako Anugerah
                    Koporasi melalui website{" "} */}
                    {t("answer.1")}
                    <Link href="/loker" className="text-BlueTako underline">
                        https://karier.tako.co.id/loker
                    </Link>
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Apakah saya bisa melamar lebih dari 1 posisi secara
                    bersamaan? */}
                    {t("question.2")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Bisa, Anda bisa melamar maksimal 2 posisi secara bersamaan.
                    Jadi, pastikan sesuai dengan kompetensi Anda. */}
                    {t("answer.2")}
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Saya mengalami kesulitan ketika mengunggah berkas CV */}
                    {t("question.3")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Pastikan berkas CV yang Anda upload dalam format PDF dengan
                    ukuran maksimal 2 MB. */}
                    {t("answer.3")}
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Apakah saya bisa mengajukan internship di PT. Tako Anugerah
                    Koporasi? */}
                    {t("question.4")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Tentu bisa, silakan untuk melakukan proses pendaftaran
                    sesuai alurnya. Untuk program silahkan isi dengan nama{" "}
                    Internship dan jangan lupa untuk mengunggah Surat Pengajuan
                    Internship dan CV dalam 1 dokumen. */}
                    {t("answer.4")}
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Berapa lama proses rekrutmen di PT. Tako Anugerah Koporasi
                    berlangsung? */}
                    {t("question.5")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Proses rekrutmen di PT. Tako Anugerah Koporasi berlangsung{" "}
                    selama 2 minggu hingga 1 bulan. */}
                    {t("answer.5")}
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Bagaimana cara mengetahui bahwa lamaran saya diterima? */}
                    {t("question.6")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Lamaran kamu kami terima ketika sudah mengisi semua data dan
                    mengunggah CV yang dibutuhkan. Setelah Anda submit akan
                    muncul tampilan “Terima Kasih Sudah Melamar” yang menandakan
                    bahwa lamaran Anda sudah kami terima. */}
                    {t("answer.6")}
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Apakah ada biaya selama proses rekrutmen di PT. Tako
                    Anugerah Koporasi? */}
                    {t("question.7")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Tidak ada, proses rekrutmen kami 100% gratis. Jika Anda
                    diminta untuk membayar biaya apa pun, jangan pernah membayar
                    biaya tersebut. Segera laporkan kepada kami melaui di
                    recruitment@tako.co.id */}
                    {t("answer.7")}
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Apa yang harus saya lakukan jika tidak lolos proses
                    rekrutmen? */}
                    {t("question.8")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Jika Anda tidak lolos proses rekrutmen, jangan berkecil
                    hati. Pelajari apa yang menjadi kekurangan Anda dan lakukan
                    perbaikan. Anda juga dapat mencoba melamar kembali ke
                    perusahaan tersebut di masa depan. */}
                    {t("answer.8")}
                </p>
            ),
        },

        {
            question: (
                <p className="text-xs md:text-base leading-5 translate w-[95%]">
                    {/* Saya tertarik untuk menjadi bagian dari PT. Tako Anugerah
                    Koporasi, namun belum ada lowongan posisi yang cocok. Apakah
                    saya bisa mengirimkan CV saya terlebih dahulu? */}
                    {t("question.9")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Tentu bisa. Silakan untuk mengisi data lowongan pekerjaan
                    dan mengirimkan CV Anda. Kami akan menyimpan data Anda dan
                    menghubungi dikemudian hari jika terdapat posisi yang kami
                    rasa cocok dengan Anda. */}
                    {t("answer.9")}
                </p>
            ),
        },
        {
            question: (
                <p className="text-xs md:text-base leading-5 translate">
                    {/* Apabila saya ada kendala lainnya, saya harus menghubungi
                    siapa? */}
                    {t("question.10")}
                </p>
            ),
            answer: (
                <p className="opacity-90 text-xs md:text-base leading-5 translate">
                    {/* Anda bisa menghubungi kami melalui recruitment@tako.co.id
                    dengan subjek Rekrutmen_Nama. Lalu sampaikan dan sertakan
                    tangkapan layarnya dari kendala yang Anda temukan. */}
                    {t("answer.10")}
                </p>
            ),
        },
    ];

    return (
        <Layout pageTitle="FAQ | Tako Karier">
            <section className="bg-BgTako font-inter text-DarkTako flex flex-col">
                <Nav />
                <HeaderFAQ />
                <div className="container max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 py-16  md:pt-16">
                    <div className="bg-white p-4 rounded-lg py-8">
                        <div className="pb-8 p-4 rounded-lg">
                            <h1 className="text-center text-xs md:text-base 2xl:text-2xl pt-4 font-semibold translate">
                                {/* Apa yang ingin Anda ketahui tentang kami? */}
                                {t("question.title")}
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
                                        <Typography component="div">
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography component="div">
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </AccordionContainer>
                    </div>
                </div>
                <BackToTop />
                <Footer />
            </section>
        </Layout>
    );
};

export default Faq;
