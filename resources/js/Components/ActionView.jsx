import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ActionViewBox from "./ActionViewBox";
import { useDisclosure } from "@mantine/hooks";

const ActionView = ({ data, id }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const onViewHandler = (e, id) => {
        e.preventDefault();
        const selectedItem = data.find((item) => item.id === id);
        setSelectedItem(selectedItem);
        open();
    };

    return (
        <>
            <button
                onClick={(e) => onViewHandler(e, id)}
                className="circle w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center text-white"
            >
                <AiOutlineArrowRight />
            </button>
            <ActionViewBox
                selectedItem={selectedItem}
                opened={opened}
                close={close}
            />
        </>
    );
};

export default ActionView;
