import { Modal } from "@mantine/core";
import React from "react";

const ModalBox = ({ children, opened, close, title }) => {
    return (
        <Modal
            opened={opened}
            onClose={close}
            title={title ?? ""}
            centered
            zIndex={1000}
        >
            {children}
        </Modal>
    );
};

export default ModalBox;
