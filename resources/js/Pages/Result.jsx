import Hero from "@/Components/Hero";
import React from "react";
import { Link, Head, router } from "@inertiajs/react";

const Result = ({ auth, laravelVersion, phpVersion, percentage, comment }) => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
                <div className="header fixed top-0 left-0 right-0 sm:py-6 py-4 sm:px-[6rem] px-[1rem] flex justify-between items-center sm:gap-5 gap-2">
                    <div className="shrink-0">
                        <img
                            src="https://i.postimg.cc/pTD8L4ZM/quiz.png"
                            alt=""
                            className="block h-12 w-auto fill-current"
                        />
                    </div>
                    <div className="sm:text-3xl text-lg font-bold flex-1">
                        Result
                    </div>
                    <div className="">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-semibold text-gray-600 hover:text-blue-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex sm:gap-10 gap-3">
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-400 hover:text-blue-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className=" font-semibold text-gray-400 hover:text-blue-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex-1">
                    <Hero
                        title={"Your score is "}
                        span={`${percentage} %`}
                        description={`${comment} Do you want to try again?`}
                    />
                </div>
            </div>
        </>
    );
};

export default Result;
