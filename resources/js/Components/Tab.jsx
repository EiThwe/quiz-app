import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";

const Tab = ({ active, setActive, data }) => {
    const onClickHandler = (id) => setActive(id);
    const onNextClickHandler = () => {
        if (active != data.length) {
            setActive((prev) => prev + 1);
        }
    };

    const isDone = (id) =>
        id < active
            ? "bg-blue-500 text-white border-transparent"
            : "bg-transparent";

    return (
        <div className="w-[20%] flex flex-col px-8 items-start">
            <button
                onClick={() => onClickHandler(data[0].id)}
                className="flex items-center gap-3"
            >
                <div
                    className={`w-11 h-11 rounded-full border ${
                        active == data[0].id
                            ? "border-blue-500 text-blue-500"
                            : data[0].id > active && "border-gray-500"
                    } ${isDone(data[0].id)} flex justify-center items-center`}
                >
                    {data[0].id}
                </div>
                <p className="font-semibold">{data[0].name}</p>
            </button>
            <div className="w-11 h-auto flex justify-center">
                <div className="w-[1px] h-[80px] bg-gray-500 my-3" />
            </div>
            <button
                onClick={() => onClickHandler(data[1].id)}
                className="flex items-center gap-3"
            >
                <div
                    className={`w-11 h-11 rounded-full border ${
                        active == data[1].id
                            ? "border-blue-500 text-blue-500"
                            : data[1].id > active && "border-gray-500"
                    } ${isDone(data[1].id)} flex justify-center items-center`}
                >
                    {data[1].id}
                </div>
                <p className="font-semibold"> {data[1].name}</p>
            </button>
            <div className="w-11 h-auto flex justify-center">
                <div className="w-[1px] h-[80px] bg-gray-500 my-3" />
            </div>
            <button
                onClick={() => onClickHandler(data[2].id)}
                className="flex items-center gap-3"
            >
                <div
                    className={`w-11 h-11 rounded-full border ${
                        active == data[2].id
                            ? "border-blue-500 text-blue-500"
                            : data[2].id > active && "border-gray-500"
                    } ${isDone(data[2].id)} flex justify-center items-center`}
                >
                    {data[2].id}
                </div>
                <p className="font-semibold"> {data[2].name}</p>
            </button>
            {active == data.length ? (
                <button
                    form="user_form"
                    value="Submit"
                    type="submit"
                    className="uppercase mt-10 px-3 py-2 rounded-md bg-blue-400 flex items-center gap-1 text-white text-sm"
                >
                    submit
                    <IconArrowNarrowRight />
                </button>
            ) : (
                <button
                    onClick={onNextClickHandler}
                    className="uppercase mt-10 px-3 py-2 rounded-md bg-blue-400 flex items-center gap-1 text-white text-sm"
                >
                    next
                    <IconArrowNarrowRight />
                </button>
            )}
        </div>
    );
};

export default Tab;
