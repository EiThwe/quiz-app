import { DateInput } from "@mantine/dates";
import React, { useState } from "react";

import { IconCalendar } from "@tabler/icons-react";
import { Radio, Select, TextInput, Textarea } from "@mantine/core";

const PersonalForm = ({ form }) => {
    // console.log(propsOptions)
    // const options = propsOptions.map((item) => {
    //     return { value: item.id, label: item.name };
    // });
    // console.log(options);
    const now = new Date();
    const eighteenYearsAgo = new Date(
        now.getFullYear() - 18,
        now.getMonth(),
        now.getDate()
    );

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const [selectedDate, setSelectedDate] = useState(
        formatDate(eighteenYearsAgo)
    );
    const handleDateChange = (date) => {
        // Prevent selecting dates before eighteen years ago
        if (date >= eighteenYearsAgo) {
            setSelectedDate(date);
        }
    };
    console.log(eighteenYearsAgo);
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="name"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Name
                    </label>
                </div>
                <div className="w-[70%]">
                    <TextInput
                        placeholder="Enter Name"
                        classNames={{
                            input: "py-5 rounded-md border-gray-300 placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800",
                        }}
                        {...form.getInputProps("name")}
                        // error={form.errors.name}
                    />
                </div>
            </div>
            <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="date_of_birth"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Date of Birth
                    </label>
                </div>
                <div className="w-[70%] mt-0">
                    <DateInput
                        value={selectedDate}
                        onChange={handleDateChange}
                        icon={<IconCalendar />}
                        placeholder="Date input"
                        classNames={{
                            input: "py-5 rounded-md placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800",
                            icon: "text-blue-500",
                        }}
                        format="YYYY-MM-DD"
                        // minDate={}
                        {...form.getInputProps("date_of_birth")}
                        // error={form.errors.date_of_birth}
                    />
                </div>
            </div>
            <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="gender"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Gender
                    </label>
                </div>
                <div className="w-[70%] flex flex-row gap-5">
                    <Radio
                        label="Male"
                        classNames={{ label: "mt-1", radio: "border-gray-400" }}
                        checked={form.values.gender == "male"}
                        onChange={(e) => form.setFieldValue("gender", "male")}
                    />
                    <Radio
                        label="Female"
                        classNames={{ label: "mt-1", radio: "border-gray-400" }}
                        checked={form.values.gender == "female"}
                        onChange={(e) => form.setFieldValue("gender", "female")}
                    />
                </div>
            </div>
            {/* <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="grade"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Grade
                    </label>
                </div>
                <div className="w-[70%] ">
                    <Select
                        placeholder="Pick one"
                        data={options}
                        classNames={{
                            input: "py-5 rounded-md border-gray-300 placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800",
                        }}
                        {...form.getInputProps("grade_id")}

                    />
                </div>
            </div> */}
            <div className="flex w-full items-start">
                <div className="w-[30%]">
                    <label
                        htmlFor="name"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Address
                    </label>
                </div>
                <div className="w-[70%] flex flex-row gap-5 ">
                    <Textarea
                        className="w-full"
                        minRows={8}
                        {...form.getInputProps("address")}
                        // error={form.errors.address}
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalForm;
