import FlashMessage from "@/Components/FlashMessage";
import LoginInfo from "@/Components/LoginInfo";
import PersonalForm from "@/Components/PersonalForm";
import PhotoUpload from "@/Components/PhotoUpload";
import Tab from "@/Components/Tab";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router, usePage } from "@inertiajs/react";
import { useForm } from "@mantine/form";
import {
    IconArrowAutofitRight,
    IconArrowNarrowRight,
} from "@tabler/icons-react";
import dayjs from "dayjs";
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

const Create = ({ errors, flash, auth, grades }) => {
    console.log(flash);
    console.log(errors);
    const { message, token } = usePage().props.flash;
    const [alert, setAlert] = useState(false);

    const [active, setActive] = useState(1);

    // useEffect(() => {
    //     if (message) {
    //         setAlert(true);
    //         setTimeout(() => {
    //             setAlert(false);
    //         }, 2000);
    //     }
    // }, [token]);

    const form = useForm({
        initialValues: {
            name: "Chit Chit",
            date_of_birth: "",
            gender: "male",
            address: "ghasjljalkj",
            email: "cc@gmail.com",
            role: "teacher",
            grade_id: "",
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
            date_of_birth: (value) =>
                value ? null : "Date of birth is required",
            gender: (value) =>
                value && ["male", "female"].includes(value)
                    ? null
                    : "Gender must be male or female",
            grade_id: (value) => (value ? null : " Grade is required"),
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
        // values["date_of_birth"] = dayjs(values["date_of_birth"]).format(
        //     "M/D/YYYY"
        // );
        console.log(values);

        router.post("/teachers", values);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Teacher
                </h2>
            }
        >
            {flash.message && (
                <FlashMessage message={flash.message} type={flash.type} />
            )}
            {/* {alert && (
                <div className="bg-green-300 px-5 py-2 rounded-md mx-10 mt-5">
                    {message}
                </div>
            )} */}

            <div className="p-8 flex">
                <div className="w-[70%] shadow-lg rounded-md p-8 bg-white min-h-[430px]">
                    <form
                        onSubmit={form.onSubmit(
                            (values, _event) => {
                                onSubmitHandler(values);
                            },
                            (validationErrors, _values, _event) => {
                                if (validationErrors) {
                                    setActive(1);
                                }
                            }
                        )}
                        id="user_form"
                    >
                        {active == 1 && (
                            <PersonalForm form={form} grades={grades} />
                        )}
                        {active == 2 && (
                            <LoginInfo form={form} errors={errors} />
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
