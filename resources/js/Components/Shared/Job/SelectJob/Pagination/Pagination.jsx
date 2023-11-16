import React from "react";

// import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPageLoker,
    setCurrentPageLoker,
    currentPageLoker,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPageLoker); i++) {
        pages.push(i);
    }

    return (
        <div className="flex flex-wrap justify-center mt-4">
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPageLoker(page)}
                        className={
                            page == currentPageLoker
                                ? "active font-black text-[#101010] border-[#101010]"
                                : "w-10 h-10 font-semibold text-base cursor-pointer transition-all duration-[0.3s] ease-[ease] text-[#eee] mx-2.5 my-0 rounded-md border-[#eee];"
                        }
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
