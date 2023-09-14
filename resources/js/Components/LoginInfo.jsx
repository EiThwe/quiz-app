import React from "react";

import { PasswordInput, TextInput } from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";

const LoginInfo = ({form}) => {
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
                            input: "py-5",
                        }}
                        {...form.getInputProps("password")}

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

                            input: "py-5",
                        }}
                        {...form.getInputProps("password_confirmation")}

                    />
                </div>
            </div>
        </div>
    );
};

export default LoginInfo;
