import FlashMessage from "@/Components/FlashMessage";
import LoginInfo from "@/Components/LoginInfo";
import PersonalForm from "@/Components/PersonalForm";
import PhotoUpload from "@/Components/PhotoUpload";
import Tab from "@/Components/Tab";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
// import { router, usePage } from "@inertiajs/react";
import { useForm } from "@mantine/form";

import React, { useEffect, useState } from "react";

const mockdata = [
    {
        id: 1,
        name: "Personal",
    },
    {
        id: 2,
        name: "Login Info",
    },
    {
        id: 3,
        name: "Photo",
    },
];

const Create = ({ errors, flash, auth, departments }) => {
    console.log(flash);
    console.log(errors);
    // const { message, token } = usePage().props.flash;
    // const [alert, setAlert] = useState(false);

    const [active, setActive] = useState(1);

    const form = useForm({
        initialValues: {
            name: "Chit Chit",
            date_of_birth: "",
            gender: "male",
            address: "ghasjljalkj",
            email: "cc@gmail.com",
            role: "stuff",
            department_id: "",
            phone_number: "099887765541",
            password: "11223344",
            password_confirmation: "11223344",
            photos: [],
        },

        validate: {
            name: (value) => (value ? null : "Name is required"),
            phone_number: (value) =>
                value && value.length >= 9
                    ? null
                    : "Phone number must be at least 9 digits",
            // date_of_birth: (value) => {
            //     const now = new Date();
            //     const minDate = new Date(
            //         now.getFullYear() - 18,
            //         now.getMonth(),
            //         now.getDate()
            //     );
            //     const inputDate = new Date(value);

            //     //Check if date_of_birth is not empty
            //     if (!value) {
            //         return "Date of birth is required";
            //     }

            //     // Check if date_of_birth is at least 18 years ago
            //     return inputDate <= minDate
            //         ? null
            //         : "Must be 18 years or older.";
            // },
            date_of_birth: (value) =>
                value ? null : "Date of birth is required",
            gender: (value) =>
                value && ["male", "female"].includes(value)
                    ? null
                    : "Gender must be male or female",
            department_id: (value) =>
                value ? null : " Department is required",
            address: (value) =>
                value && value.length >= 50
                    ? null
                    : "Address must be at least 50 characters",
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            password: (value) =>
                value.length < 8
                    ? "Your password must be at least 8 characters"
                    : null,
            password_confirmation: (value, values) =>
                value !== values.password ? "Passwords did not match" : null,
            photos: (value) =>
                value && value.length > 0 ? null : "Photo is required",
        },
    });

    const onSubmitHandler = (values) => {
        console.log(values);

        router.post("/staffs", values);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Stuff
                </h2>
            }
        >
            {flash.message && (
                <FlashMessage message={flash.message} type={flash.type} />
            )}

            <div className="p-8 flex">
                <div className="w-[70%] shadow-lg rounded-md p-8 bg-white min-h-[430px]">
                    <form
                        onSubmit={form.onSubmit(
                            (values, _event) => {
                                onSubmitHandler(values);
                                console.log("click");
                            },
                            (validationErrors, _values, _event) => {
                                console.log(validationErrors);
                                if (validationErrors) {
                                    setActive(1);
                                }
                            }
                        )}
                        id="user_form"
                    >
                        {active == 1 && <PersonalForm form={form} />}
                        {active == 2 && (
                            <LoginInfo
                                form={form}
                                errors={errors}
                                departments={departments}
                            />
                        )}
                        {active == 3 && <PhotoUpload form={form} />}
                    </form>
                </div>
                <Tab active={active} setActive={setActive} data={mockdata} />
            </div>
        </Authenticated>
    );
};

export default Create;
