import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

const SelectReligion = () => {
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
                    register("agama", { value }); // Gantilah "gender" dengan nama field yang sesuai
                }}
                options={[
                    { value: "Islam", label: "Islam" },
                    { value: "Kristen", label: "Kristen" },
                    { value: "Hindu", label: "Hindu" },
                    { value: "Budha", label: "Budha" },
                    { value: "Kong Hu Cu", label: "Kong Hu Cu" },
                ]}
                placeholder="Pilih Agama Anda"
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

export default SelectReligion;
