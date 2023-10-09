import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

const SelectGender = ({ onGenderChange }) => {
    // const [gender, setGender] = useState("");
    const [color, setColor] = useState("red");
    const { register } = useForm();

    const handleGenderChange = (selectedOption) => {
        // setGender(selectedOption.value);
        onGenderChange(selectedOption.value); // Panggil fungsi callback untuk mengirim nilai gender ke komponen induk
    };

    return (
        <>
            <Select
                classNames={{
                    control: (state) =>
                        state.isFocused ? "border-red-600" : "border-grey-300",
                }}
                value={color}
                // onChange={(value) => {
                //     setColor(value);
                //     register("gender", { value }); // Gantilah "gender" dengan nama field yang sesuai
                // }}
                onChange={handleGenderChange}
                options={[
                    { value: "Laki-Laki", label: "Laki-Laki" },
                    { value: "Perempuan", label: "Perempuan" },
                    { value: "Lainnya", label: "Lainnya" },
                ]}
                placeholder="Pilih Jenis Kelamin Anda"
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

export default SelectGender;
