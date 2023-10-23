import React from "react";

import { MultiSelect, PasswordInput, TextInput, Select } from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";

const LoginInfo = ({ errors, form, grades, subjects, departments }) => {
    // console.log(propsOptions);
    const departmentOptions = departments?.map((item) => {
        return { value: item.id, label: item.name };
    });
    console.log(departments)
    console.log(departmentOptions);
    const gradeOptions = grades?.map((item) => {
        return { value: item.id, label: item.name };
    });
    const subjectOptions = subjects?.map((item) => {
        return { value: item.id, label: item.name };
    });

    return (
        <div className="w-full flex flex-col gap-5">
            <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="name"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Email
                    </label>
                </div>
                <div className="w-[70%]">
                    <TextInput
                        placeholder="Enter Email"
                        classNames={{
                            input: "py-5 rounded-md border-gray-300 placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800",
                        }}
                        {...form.getInputProps("email")}
                        error={errors.email}
                    />
                </div>
            </div>
            <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="name"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Phone
                    </label>
                </div>
                <div className="w-[70%]">
                    <TextInput
                        placeholder="Enter Phone"
                        classNames={{
                            input: "py-5 rounded-md border-gray-300 placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800",
                        }}
                        {...form.getInputProps("phone_number")}
                        // error={form.errors.phone_number}
                    />
                </div>
            </div>
            <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="name"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Password
                    </label>
                </div>
                <div className="w-[70%]">
                    <PasswordInput
                        placeholder="••••••••"
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? (
                                <IconEyeOff size={size} />
                            ) : (
                                <IconEyeCheck size={size} />
                            )
                        }
                        classNames={{
                            innerInput: "border-transparent py-5",
                            input: "py-5 rounded-md",
                        }}
                        {...form.getInputProps("password")}
                        // error={form.errors.password}
                    />
                </div>
            </div>
            <div className="flex w-full items-center">
                <div className="w-[30%]">
                    <label
                        htmlFor="name"
                        className="font-bold text-[16px] text-gray-600"
                    >
                        Confirm Password
                    </label>
                </div>
                <div className="w-[70%]">
                    <PasswordInput
                        placeholder="••••••••"
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? (
                                <IconEyeOff size={size} />
                            ) : (
                                <IconEyeCheck size={size} />
                            )
                        }
                        classNames={{
                            innerInput: "border-transparent py-5",

                            input: "py-5 rounded-md",
                        }}
                        {...form.getInputProps("password_confirmation")}
                    />
                </div>
            </div>
            {departments?.length == 0 ? (
                <>
                    <div className="flex w-full items-center">
                        <div className="w-[30%]">
                            <label
                                htmlFor="subject"
                                className="font-bold text-[16px] text-gray-600"
                            >
                                Subject
                            </label>
                        </div>
                        <div className="w-[70%] relative">
                            <MultiSelect
                                data={subjectOptions}
                                classNames={{
                                    input: "py-1 rounded-md border-gray-300  placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800 ",
                                    searchInput: "opacity-0 z-10",
                                }}
                                {...form.getInputProps("subject_id")}
                            />

                            {!form.values.subject_id?.length > 0 && (
                                <div className="absolute top-0 left-0 h-full flex items-center px-3">
                                    <p className="text-[15px] text-[#6B7280]">
                                        Pick Subject
                                    </p>
                                </div>
                            )}
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
                        <div className="w-[70%] relative">
                            <MultiSelect
                                data={gradeOptions}
                                classNames={{
                                    input: "py-1 rounded-md border-gray-300  placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800 ",
                                    searchInput: "opacity-0 z-10",
                                }}
                                {...form.getInputProps("grade_id")}
                            />

                            {!form.values.grade_id?.length > 0 && (
                                <div className="absolute top-0 left-0 h-full flex items-center px-3">
                                    <p className="text-[15px] text-[#6B7280]">
                                        Pick Grade
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex w-full items-center">
                        <div className="w-[30%]">
                            <label
                                htmlFor="department"
                                className="font-bold text-[16px] text-gray-600"
                            >
                                Department
                            </label>
                        </div>
                        <div className="w-[70%] relative">
                            <Select
                                placeholder="Pick value"
                                data={departmentOptions}
                                classNames={{
                                    input: "py-5 rounded-md border-gray-300 placeholder:font-[400] placeholder:text-[#6B7280] text-[16px] text-gray-800",
                                }}
                                {...form.getInputProps("department_id")}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LoginInfo;
