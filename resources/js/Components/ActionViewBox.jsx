import React from "react";
import ModalBox from "./ModalBox";
import { UserDetailCard } from "./UserDetailCard";

const ActionViewBox = ({ selectedItem, opened, close }) => {
    console.log(selectedItem);
    return (
        <ModalBox opened={opened} close={close}>
            <UserDetailCard
                address={selectedItem?.address}
                image={selectedItem?.photo}
                name={selectedItem?.name}
                email={selectedItem?.user.email}
                position={selectedItem?.user.role}
            />
        </ModalBox>
    );
};

export default ActionViewBox;
