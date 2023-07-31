import React, { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TableComponent from "@/Components/Table";
import { useDisclosure } from "@mantine/hooks";
import { Divider, Modal, Table, TextInput } from "@mantine/core";

const Index = ({ auth }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [createdQuestion, setCreatedQuestion] = useState(null);
    const [newAnswers, setNewAnswers] = useState([]);
    // console.log(typeof(newAnswers))

    // const addNewAnswer = () => {
    //     const newAnswer = {
    //         id: newAnswers.length + 1,
    //         answer: "",
    //         correct_answer: 0,
    //     };
    //     setNewAnswers(newAnswers.push(newAnswer));
    //     console.log(newAnswers);
    // };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Question
                </h2>
            }
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                <button
                    onClick={open}
                    className="px-3 py-2 rounded-md bg-blue-500 text-white mb-5"
                >
                    Create
                </button>
                <Modal
                    opened={opened}
                    onClose={close}
                    title="Add New Question"
                    centered
                    classNames={{ title: "text-xl font-semibold" }}
                >
                    <Divider className="mb-2" />
                    <TextInput
                        label="Question"
                        placeholder="Enter Question"
                        classNames={{
                            input: "border-gray-300 rounded-md mb-3",
                            label: "text-lg mb-2",
                        }}
                    />
                    <Table horizontalSpacing={"xs"}>
                        <thead className="text-left">
                            <tr>
                                <th className="w-[30px]">#</th>
                                <th className="">Answer</th>
                                <th className="w-[30px]">Correct?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{id}</td>
                                <td className="">
                                    <TextInput
                                        value={answer}
                                        placeholder=""
                                        classNames={{
                                            input: "border-gray-300 rounded-md",
                                        }}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        type="radio"
                                        className=""
                                        checked={correct_answer}
                                    />
                                </td>
                            </tr>
                            ;
                        </tbody>
                    </Table>
                    <Divider />
                    <div className="float-right my-2">
                        <div className="flex gap-3">
                            <button
                                onClick={() => addNewAnswer()}
                                className="px-2 py-[0px] rounded-md  text-4xl text-blue-500 "
                            >
                                +
                            </button>

                            <button
                                onClick={close}
                                className="px-2 py-[0px] rounded-md bg-red-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                            >
                                Close
                            </button>

                            <button
                                // onClick={}
                                className="px-2 py-[0px] rounded-md bg-gray-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </Modal>
                <TableComponent />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
