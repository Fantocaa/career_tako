import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Axios from "axios";
import SelectJobPerusahaan from "../Shared/Job/SelectJob/SelectJobPerusahaan";
import SelectJob2 from "../Shared/Job/SelectJob/SelectJob2";
import ReactPaginate from "react-paginate";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTranslation } from "react-i18next";
import LanguageContext from "../Shared/Homepage/LanguageContext";
import he from "he";

const SectionLoker = () => {
    const [selectedOption, setSelectedOption] = useState("All"); // State untuk menyimpan nilai yang dipilih
    const [searchTerm, setSearchTerm] = useState(""); // Tambahkan state untuk nilai pencarian

    const [formData, setFormData] = useState([]);
    const [jobCount, setJobCount] = useState(0); // State untuk menyimpan jumlah pekerjaan tersedia

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [globalPage, setglobalPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const [menu1Active, setMenu1Active] = useState(true);
    const [menu2Active, setMenu2Active] = useState(false);

    // const [filteredData, setFilteredData] = useState([]);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", options);
    }

    const handleMenu1Click = () => {
        if (!menu1Active) {
            setMenu1Active(true);
            setMenu2Active(false);
        } else {
            setMenu1Active(false);
        }
    };

    const handleMenu2Click = () => {
        if (!menu2Active) {
            setMenu2Active(true);
            setMenu1Active(false);
        } else {
            setMenu2Active(false);
        }
    };

    // useEffect(() => {
    //     const storedLanguage = localStorage.getItem("language");
    //     if (storedLanguage !== selectedLanguage) {
    //         localStorage.setItem("language", selectedLanguage);
    //     }
    //     changeLanguage(selectedLanguage || storedLanguage || "id");
    // }, [selectedLanguage]);

    const { selectedLanguage } = useContext(LanguageContext);
    const { t } = useTranslation();
    const [isTranslating, setIsTranslating] = useState(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        // changeLanguage(storedLanguage);
    }); // kalau pakai [] dijalankan sekali . kalau dihapus dijalankan berkali kali

    useEffect(() => {
        const storedLanguage = localStorage.getItem(
            "language",
            selectedLanguage,
        );
        // changeLanguage(storedLanguage);
    }, [selectedLanguage]);

    // const changeLanguage = (language) => {
    //     setIsTranslating(true);
    //     console.log(`Changing language to: ${language}`);
    //     const elementsToTranslate = document.querySelectorAll(".translate");

    //     elementsToTranslate.forEach((element, index) => {
    //         if (!element.dataset.originalText) {
    //             element.dataset.originalText = element.innerText;
    //         }

    //         let translatedText = localStorage.getItem(
    //             `translation-${language}-${element.dataset.originalText}`,
    //         );

    //         if (language === "id") {
    //             element.innerText = element.dataset.originalText;
    //         } else if (translatedText) {
    //             element.innerText = translatedText;
    //         } else {
    //             axios
    //                 .post("/api/translate", {
    //                     text: element.innerText,
    //                     target: language,
    //                 })
    //                 .then((response) => {
    //                     console.log(response.data); // Pastikan respons diterima dengan benar
    //                     element.innerText = he.decode(response.data);
    //                     localStorage.setItem(
    //                         `translation-${language}-${element.dataset.originalText}`,
    //                         he.decode(response.data),
    //                     );
    //                     console.log(
    //                         `translate '${element.dataset.originalText}' to '${he.decode(response.data)}'`,
    //                     );
    //                 })
    //                 .catch((error) => {
    //                     console.error(error);
    //                 });

    //             console.log(
    //                 `Translation request sent for '${element.dataset.originalText}'`,
    //             );
    //         }

    //         if (index === elementsToTranslate.length - 1) {
    //             setIsTranslating(false);
    //         }
    //     });
    // };

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const response = await Axios.get(`/api/perusahaan/${page}`, {
                params: { search: searchTerm, selection: selectedOption },
            });
            const count = response.data.total;
            setJobCount(count);

            setFormData(response.data.data);
            setPageCount(response.data.last_page);
            setCurrentPage(1);
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     fetchData(currentPage);
    // }, [currentPage]);

    const handleSelectChange = async (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        setCurrentPage(0);
        // fetchData(1); // Fetch data for the first page with the new program option
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    useEffect(() => {
        // console.log("ini useeffect" + globalPage);
        // setglobalPage(1);
        fetchData(0); // Fetch data for the first page when searchTerm changes
        setCurrentPage(1);
    }, [searchTerm, selectedOption]);

    const handlePageClick = async (data) => {
        let nextPage = data.selected + 1; // Increment page number

        try {
            const response = await Axios.get(`/api/perusahaan/${nextPage}`, {
                params: { search: searchTerm, selection: selectedOption },
            });

            const count = response.data.total;
            setJobCount(count);
            setFormData(response.data.data);
            setPageCount(response.data.last_page);

            setCurrentPage(nextPage); // Update currentPage if the request is successful
        } catch (error) {
            console.error("Error fetching data:", error);
            nextPage = currentPage;
        }
    };

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444444">
            <section className="flex mx-auto px-4 md:px-8 xl:px-16 2xl:px-32 pt-24 lg:pt-16  pb-16 md:py-8 flex-wrap items-center text-DarkTako container max-w-[1440px]">
                <>
                    <div className="flex justify-between items-end pb-8 flex-wrap gap-4 w-full">
                        <h1 className="text-BlueTako font-bold text-2xl ">
                            ({jobCount}){/* Pekerjaan yang tersedia */}
                            {t("job.count")}
                        </h1>
                    </div>
                </>
                <div className="flex justify-between w-full">
                    <div className="flex flex-wrap gap-4 w-full justify-between ">
                        <div className="flex gap-4 flex-wrap md:w-full lg:flex-nowrap">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2"
                                    >
                                        <path
                                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                            stroke="#1E1E1E"
                                            strokeOpacity="0.5"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22 22L20 20"
                                            stroke="#1E1E1E"
                                            strokeOpacity="0.5"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    // placeholder="Cari Lowongan yang anda inginkan"
                                    placeholder="Search"
                                    className="rounded-xl border-DarkTako border-opacity-25 w-full h-12 block pl-12"
                                    // onInput={}
                                    value={searchTerm}
                                    // onChange={(e) => setSearchTerm(e.target.value)}
                                    onChange={(e) =>
                                        handleSearchChange(e.target.value)
                                    }
                                    id="search"
                                />
                            </div>
                            <select
                                className="rounded-2xl border-DarkTako border-opacity-25 w-full lg:w-64"
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
                                <option value="All">
                                    {/* Semua Program */}
                                    {t("job.all")}
                                </option>
                                <option value="Internship">
                                    {/* Internship (Magang / Praktik Kerja) */}
                                    {t("job.intern")}
                                </option>
                                <option value="Profesional">
                                    {/* Profesional (Fresh Graduate / Berpengalaman) */}
                                    {t("job.pro")}
                                </option>
                            </select>

                            <div className="w-full">
                                {/* <button
                                className="btn bg-BlueTako hover:bg-BlueTako hover:bg-opacity-90 text-white border-none w-full lg:w-24 normal-case"
                                // onClick={handleSearch(searchTerm)}
                                onClick={() => handleSearch(searchTerm)}
                            >
                                Cari
                            </button> */}
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex">
                        <button
                            className={`bg-BlueTako flex items-center rounded-l-xl border border-BlueTako border-opacity-50 px-4 w-14 cursor-pointer ${
                                menu1Active ? "active" : "bg-white"
                            }`}
                            onClick={handleMenu1Click}
                            disabled={menu1Active}
                        >
                            {/* <img src="/images/logo/menu1.svg" alt="" className="" /> */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                                    stroke={menu1Active ? "white" : "#213C90"}
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            className={` flex items-center rounded-r-xl px-4 border border-BlueTako border-opacity-50 w-14 cursor-pointer ${
                                menu2Active ? "active bg-BlueTako" : "bg-white"
                            }`}
                            onClick={handleMenu2Click}
                            disabled={menu2Active}
                        >
                            {/* <img src="/images/logo/menu2.svg" alt="" className="" /> */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
                                    stroke={menu2Active ? "white" : "#213C90"}
                                    // strokeOpacity    ="0.5"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z"
                                    // stroke="#213C90"
                                    stroke={menu2Active ? "white" : "#213C90"}
                                    // strokeOpacity    ="0.5"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* <div className="bg-white opacity-90 blur"> */}
                {formData.length === 0 ? (
                    <div className="flex justify-center w-full pt-16">
                        <p className="text-DarkTako ">
                            {/* Maaf, tidak ada lowongan yang tersedia saat ini. */}
                            {t("job.notfound")}
                        </p>
                    </div>
                ) : (
                    <>
                        <div
                            className={`pt-8 w-full ${
                                menu1Active ? "" : "hidden"
                            }`}
                        >
                            <SelectJobPerusahaan
                                active={menu1Active}
                                // formData={formDataLoker}
                                formData={formData}
                                // values={values}
                            />
                        </div>
                        <div
                            className={`pt-8 w-full ${
                                menu2Active ? "" : "hidden"
                            }`}
                        >
                            <SelectJob2
                                active={menu2Active}
                                // formData={formDataLoker}
                                formData={formData}
                                // values={values}
                            />
                        </div>
                    </>
                )}

                <div className="w-full mx-auto flex justify-center pb-8 pt-16 items-center">
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        // pageCount={12}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        onPageChange={handlePageClick}
                        // initialPage={0}
                        forcePage={currentPage - 1}
                        containerClassName="join flex bg-BgTako items-center text-BlueTako"
                        pageClassName="join-item btn btn-square hover:bg-BlueTako hover:bg-opacity-10 border-0"
                        pageLinkClassName="join-item btn btn-square hover:bg-BlueTako hover:bg-opacity-10 border-0"
                        previousLinkClassName="join-item btn btn-square hover:bg-BlueTako hover:bg-opacity-10 border-0"
                        nextLinkClassName="join-item btn btn-square hover:bg-BlueTako hover:bg-opacity-10 border-0"
                        breakClassName="join-item"
                        breakLinkClassName="join-item btn btn-square hover:bg-BlueTako hover:bg-opacity-10 border-0"
                        activeClassName="bg-BlueTako bg-opacity-10 "
                    />
                </div>
                {/* </div> */}
            </section>
        </SkeletonTheme>
    );
};

export default SectionLoker;
