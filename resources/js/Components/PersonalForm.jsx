import { DateInput } from "@mantine/dates";
import React, { useState } from "react";

import { IconCalendar } from "@tabler/icons-react";
import { Radio, Select, TextInput, Textarea } from "@mantine/core";

const PersonalForm = ({ form, grades }) => {
    // console.log(grades)
    const options = grades.map((item) => {
        return { value: item.id, label: item.name };
    });
    console.log(options);

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
                        // value={value}
                        // onChange={setValue}
                        icon={<IconCalendar />}
                        placeholder="Date input"
                        classNames={{
                            input: "py-5 rounded-md placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800",
                            icon: "text-blue-500",
                        }}
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
            <div className="flex w-full items-center">
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
            </div>
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
                        minRows={5}
                        {...form.getInputProps("address")}
                        // error={form.errors.address}
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalForm;
