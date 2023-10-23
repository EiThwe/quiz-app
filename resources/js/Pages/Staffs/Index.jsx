import { Table } from "@mantine/core";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    AiOutlineArrowRight,
    AiOutlineEdit,
    AiOutlineMinus,
} from "react-icons/ai";

const Index = ({ auth, staffs }) => {
    console.log(staffs);
    // const { name, email, created_at } = staffs;
    const ths = (
        <tr className=" font-[400]">
            <th className="w-[50px]">No</th>
            <th>Name</th>
            <th className="">Email</th>
            <th className="">Created at</th>
            <th className="w-[150px]">Actions</th>
        </tr>
    );

    const rows = staffs.data.map((staff, index) => (
        <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>{staff.name}</td>

            <td>{staff.user.email}</td>
            <td>
                {new Date().toLocaleDateString("en-GB", staff.user.created_at)}
            </td>
            <td className="">
                <div className="flex gap-3 justify-end">
                    <button className="circle w-8 h-8 rounded-full bg-red-400 flex justify-center items-center text-white">
                        <AiOutlineMinus />
                    </button>
                    <button className="circle w-8 h-8 rounded-full bg-green-400 flex justify-center items-center text-white">
                        <AiOutlineEdit />
                    </button>
                    <button className="circle w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center text-white">
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </td>
        </tr>
    ));
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Staffs
                </h2>
            }
        >
            <div className="p-8">
                <Table
                    striped
                    highlightOnHover
                    withBorder
                    withColumnBorders
                    fontSize={"md"}
                    horizontalSpacing={10}
                    verticalSpacing={"md"}
                >
                    <thead>{ths}</thead>
                    <tbody>{rows}</tbody>
                </Table>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
