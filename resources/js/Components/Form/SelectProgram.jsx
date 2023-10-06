import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

const SelectProgram = () => {
    const [color, setColor] = useState("red");
    const { register } = useForm();

    return (
        <>
            <Select
                classNames={{
                    control: (state) =>
                        state.isFocused ? "border-red-600" : "border-grey-300",
                }}
                value={color}
                onChange={(value) => {
                    setColor(value);
                    register("program", { value }); // Gantilah "gender" dengan nama field yang sesuai
                }}
                options={[
                    { value: "Internship", label: "Internship" },
                    { value: "Profesional", label: "Profesional" },
                ]}
                placeholder="Pilih Jenis Program Anda"
                styles={{
                    control: (provided) => ({
                        ...provided,
                        padding: "4px", // Atur padding sesuai kebutuhan Anda
                    }),
                }}
            />
        </>
    );
};

export default SelectProgram;
