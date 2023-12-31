import React, { useEffect, useState } from "react";
import Nav from "@/Components/Shared/Else/NavElse";
import Footer from "@/Components/Shared/Footer";
import { Link } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";
import Axios from "axios";
import { shareOnMobile } from "react-mobile-share";
import Layout from "@/Layouts/Layout";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

const DetailLoker = () => {
    // const [formData, setFormData] = useState([]);
    const { props } = usePage();
    const { md_loker } = props;

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    const [values, setValues] = useState({
        // password: "meong",
        id: md_loker[0].id,
        pekerjaan: md_loker[0].pekerjaan,
        perusahaan: md_loker[0].perusahaan,
        jenis_pekerjaan: md_loker[0].jenis_pekerjaan,
        batas_lamaran: md_loker[0].batas_lamaran, // Inisialisasi properti batas_lamaran
        isi_konten: md_loker[0].deskripsi,
        deskripsi: md_loker[0].isi_konten,
    });
    // console.log(md_loker);

    const urlLink = window.location.href;
    const urlLinkDekstop = "karir.tako.co.id" + window.location.pathname;

    console.log(urlLinkDekstop);

    return (
        <>
            {/* {formData.map((item) => ( */}
            <Layout pageTitle="Detail Loker | Tako Karir">
                <section
                    className="bg-BgTako font-inter text-DarkTako md:pt-16 min-h-screen flex flex-col"
                    // key={item.id}
                >
                    <Nav />
                    <div className="container flex-wrap mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 py-16 pt-28 md:pt-16 justify-between">
                        <div className="bg-white p-4 rounded-lg py-8 md:px-8">
                            <div className="flex items-end">
                                <div className="w-full">
                                    <h1 className="font-bold lg:text-2xl">
                                        {values.pekerjaan}
                                        {/* {item.pekerjaan} */}
                                    </h1>
                                    {/* <p className="text-BlueTako pt-8 text-xs lg:text-base ">
                                        {values.perusahaan}
                                    </p> */}
                                    {/* {item.perusahaan} */}
                                    <div className="flex gap-4 pt-8">
                                        <div className="flex items-center text-xs lg:text-base gap-2 lg:gap-4">
                                            <img
                                                src="/images/program.svg"
                                                className="scale-150 lg:ml-2"
                                                alt=""
                                            />
                                            <p className="">
                                                {values.jenis_pekerjaan}
                                                {/* {item.jenis_pekerjaan} */}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-xs gap-2 lg:text-base lg:gap-4">
                                            <img
                                                src="/images/clock.svg"
                                                alt=""
                                                className="scale-150 lg:ml-2"
                                            />
                                            <p>
                                                Batas Lamaran :{" "}
                                                {formatDate(
                                                    // item.batas_lamaran
                                                    values.batas_lamaran
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 lg:pt-0 gap-2 w-36 hidden lg:block">
                                    <div className="w-full md:pb-2">
                                        {/* <Link href="/">
                                        <button className="bg-BlueTako text-BlueTako bg-opacity-10 py-2 rounded-lg w-full text-xs">
                                            Share
                                        </button>
                                    </Link> */}

                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                        <button
                                            className="bg-BlueTako text-BlueTako bg-opacity-10 py-2 rounded-lg w-full text-xs"
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        "my_modal_3"
                                                    )
                                                    .showModal()
                                            }
                                        >
                                            Share
                                        </button>
                                        <dialog
                                            id="my_modal_3"
                                            className="modal"
                                        >
                                            <div className="modal-box bg-white">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                        ✕
                                                    </button>
                                                </form>
                                                <h3 className="font-bold text-lg">
                                                    Bagikan
                                                </h3>
                                                <p className="py-8 flex gap-8">
                                                    <FacebookShareButton
                                                        // url={urlLink}
                                                        url={urlLinkDekstop}
                                                        quote="Meong uwu"
                                                        hashtag=""
                                                    >
                                                        <div className="flex flex-col items-center gap-2">
                                                            <FacebookIcon
                                                                size={48}
                                                                round={true}
                                                            />
                                                            <h1>Facebook</h1>
                                                        </div>
                                                    </FacebookShareButton>
                                                    <WhatsappShareButton
                                                        url={urlLinkDekstop}
                                                        quote="Meong uwu"
                                                        hashtag=""
                                                    >
                                                        <div className="flex flex-col items-center gap-2">
                                                            <WhatsappIcon
                                                                size={48}
                                                                round={true}
                                                            />
                                                            <h1>Whatsapp</h1>
                                                        </div>
                                                    </WhatsappShareButton>
                                                </p>
                                            </div>
                                        </dialog>
                                    </div>
                                    <div className="w-full">
                                        {/* <Link href={`/job/formulir/${item.id}`}> */}
                                        <Link
                                            href={`/job/formulir/${values.id}`}
                                        >
                                            <button className="bg-BlueTako text-white py-2 rounded-lg w-full text-xs">
                                                Lamar
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="w-fullb bg-BlueTako bg-opacity-10 p-[1px] "></div>
                            </div>
                            {/* Harusnya disini baru isi RichText */}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: values.deskripsi,
                                }}
                                // dangerouslySetInnerHTML={{
                                //     __html: item.isi_konten,
                                // }}
                                className="pt-6"
                            >
                                {/* {values.deskripsi} */}
                            </div>
                            <div className="lg:hidden">
                                {/* <div className="w-fullb bg-BlueTako bg-opacity-10 p-[1px]"></div> */}
                                <div className="flex pt-8 gap-2 ">
                                    <div className="w-full">
                                        {/* <Link href="/job/detail"> */}
                                        <button
                                            className="bg-BlueTako text-BlueTako bg-opacity-10  py-2 rounded-lg w-full"
                                            onClick={() =>
                                                shareOnMobile({
                                                    text: "Come Join Us",
                                                    // url: "https://www.npmjs.com/package/react-mobile-share",
                                                    url: urlLink,
                                                    title:
                                                        values.pekerjaan +
                                                        " - karir.tako.co.id",
                                                    // images: [imgBase64],
                                                })
                                            }
                                        >
                                            Share
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                    <div className="w-full">
                                        {/* <Link href={`/job/formulir/${item.id}`}> */}
                                        <Link
                                            href={`/job/formulir/${values.id}`}
                                        >
                                            <button className="bg-BlueTako text-white py-2 rounded-lg w-full">
                                                Lamar
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
                {/* ))} */}
            </Layout>
        </>
    );
};

export default DetailLoker;
