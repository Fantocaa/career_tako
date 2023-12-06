import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        password: "jancokk",
        first_name: "",
        last_name: "",
        email: "",
        tempat_tinggal: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("http://127.0.0.1:8000/api/apicoba", values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First name:</label>
            <input
                id="first_name"
                value={values.first_name}
                onChange={handleChange}
            />
            {errors.first_name && <div>{errors.first_name}</div>}
            <label htmlFor="last_name">Last name:</label>
            <input
                id="last_name"
                value={values.last_name}
                onChange={handleChange}
            />
            {errors.last_name && <div>{errors.first_name}</div>}
            <label htmlFor="email">Email:</label>
            <input id="email" value={values.email} onChange={handleChange} />
            <select
                className="js-example-basic-single"
                value={values.tempat_tinggal}
            >
                <option value="AL">Alabama</option>
                ...
                <option value="WY">Wyoming</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}
