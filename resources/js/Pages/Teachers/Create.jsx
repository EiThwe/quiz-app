import LoginInfo from "@/Components/LoginInfo";
import PersonalForm from "@/Components/PersonalForm";
import PhotoUpload from "@/Components/PhotoUpload";
import Tab from "@/Components/Tab";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@mantine/form";
import {
    IconArrowAutofitRight,
    IconArrowNarrowRight,
} from "@tabler/icons-react";
import React, { useState } from "react";

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

const Create = ({ auth }) => {
    const [active, setActive] = useState(1);
    const form = useForm({
        initialValues: {
            name: "",
            date_of_birth: "",
            gender: "",
            address: "",
            email: "",
            password: "",
            password_confirmation: "",
            images: [],
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    });
    console.log(form);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Teacher
                </h2>
            }
        >
            <div className="p-8 flex">
                <div className="w-[70%] shadow-lg rounded-md p-8 bg-white h-[430px]">
                    <form
                        onSubmit={form.onSubmit((values) =>
                            console.log(values)
                        )}
                        id="user_form"
                    >
                        {active == 1 && <PersonalForm form={form} />}
                        {active == 2 && <LoginInfo form={form} />}
                        {active == 3 && <PhotoUpload form={form} />}
                    </form>
                </div>
                <Tab active={active} setActive={setActive} data={mockdata} />
            </div>
        </Authenticated>
    );
};

export default Create;