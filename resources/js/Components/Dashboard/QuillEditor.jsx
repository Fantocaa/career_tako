import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const QuillEditor = ({ value, onChange }) => {
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.on("text-change", () => {
                onChange(quill.root.innerHTML);
            });
        }
    }, [quill, onChange]);

    useEffect(() => {
        if (quill && value !== quill.root.innerHTML) {
            quill.root.innerHTML = value;
        }
    }, [quill, value]);

    return <div ref={quillRef} style={{ height: "300px" }} />;
};

export default QuillEditor;
