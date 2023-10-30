import React from "react";

export default function ImageModal() {
    return (
        <div className="hidden md:grid grid-cols-3 gap-4 ">
            <div className="col-span-2 ">
                <img
                    src="/images/image-1.jpg"
                    className="w-full rounded-xl object-cover cursor-pointer"
                    alt="Tailwind CSS Carousel component"
                />
            </div>
            <div>
                <img
                    src="/images/image-1.jpg"
                    alt="Image"
                    data-bs-toogle="modal"
                    data-bs-taeget="#imageExample"
                />

                {/* Modal */}
                <div
                    className="modal fade"
                    id="imageExample"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                <img src="/images/image-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="">
                <img
                    src="/images/image-1.jpg"
                    className="w-full rounded-xl object-cover h-full"
                    alt="Tailwind CSS Carousel component"
                />
            </div>
            <div className="">
                <img
                    src="/images/image-1.jpg"
                    className="w-full rounded-xl object-cover h-full"
                    alt="Tailwind CSS Carousel component"
                />
            </div>
            <div className="col-span-2 ">
                <img
                    src="/images/image-1.jpg"
                    className="w-full rounded-xl object-cover"
                    alt="Tailwind CSS Carousel component"
                />
            </div> */}
        </div>
    );
}
