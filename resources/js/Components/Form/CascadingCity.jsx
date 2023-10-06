import React, { useState } from "react";
import Select from "react-select";
import { countries, province, cities } from "./List City/ListCity";

const CascadingCity = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [zipCode, setZipCode] = useState("");

    const countryOptions = countries.map((country) => ({
        label: country.label,
        value: country.value,
    }));

    const provinceOptions = province
        .filter(
            (province) => province.country === (selectedCountry?.value || "")
        )
        .map((province) => ({
            label: province.label,
            value: province.value,
        }));

    const cityOptions = cities
        .filter((city) => city.province === (selectedProvince?.value || ""))
        .map((city) => ({
            label: city.label,
            value: city.value,
        }));

    return (
        <>
            <div className="block md:flex pb-4">
                <div className="w-full md:w-[50%] pb-4 mr-4">
                    <h2 className="pb-2">Provinsi</h2>
                    <Select
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={(selectedOption) =>
                            setSelectedCountry(selectedOption)
                        }
                        placeholder="Pilih Provinsi"
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                padding: "2px", // Atur padding sesuai kebutuhan Anda
                            }),
                        }}
                    />
                </div>

                <div className="w-full md:w-[50%] mr-4">
                    <h2 className="pb-2">Kabupaten/Kota</h2>
                    <Select
                        options={provinceOptions}
                        value={selectedProvince}
                        onChange={(selectedOption) =>
                            setSelectedProvince(selectedOption)
                        }
                        isDisabled={!selectedCountry}
                        placeholder="Kabupaten/Kota"
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                padding: "2px", // Atur padding sesuai kebutuhan Anda
                            }),
                        }}
                    />
                </div>
            </div>
            <div className="block md:flex">
                <div className="w-full mr-4 pb-4">
                    <h2 className="pb-2">Kecamatan</h2>
                    <Select
                        options={cityOptions}
                        value={selectedCity}
                        onChange={(selectedOption) =>
                            setSelectedCity(selectedOption)
                        }
                        isDisabled={!selectedProvince}
                        placeholder="Pilih Kecamatan"
                        styles={{
                            control: (provided) => ({
                                ...provided,
                                padding: "2px", // Atur padding sesuai kebutuhan Anda
                            }),
                        }}
                    />
                </div>

                <div className="w-full">
                    <h2 className="w-full md:w-[50%] pb-2 mr-4">Kode Pos</h2>
                    <input
                        type="number"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Masukkan Kode Pos"
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                    />
                </div>
            </div>
        </>
    );
};

export default CascadingCity;
