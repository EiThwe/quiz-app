import React, { useEffect, useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TableComponent from "@/Components/Table";
import { useDisclosure } from "@mantine/hooks";
import { Divider, Modal, Table, TextInput } from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";
import { Toaster, toast } from "react-hot-toast";
import { router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

import Lottie from "lottie-react";
import EmptyState from "@/assets/emptystate.json";

const Index = ({ auth, questions }) => {
    console.log(questions);
    const { message, token } = usePage().props.flash;
    console.log(message, token);
    const [opened, { open, close }] = useDisclosure(false);
    const [createdQuestion, setCreatedQuestion] = useState("");
    const [newAnswers, setNewAnswers] = useState([
        {
            id: 1,
            answer: "",
            correct_answer: 0,
        },
    ]);
    const [alert, setAlert] = useState(false);
    const [showViewQuestionModal, setShowViewQuestionModal] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState("");
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    console.log(selectedAnswers);
    useEffect(() => {
        if (message) {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 2000);
        }
    }, [token]);

    const addNewAnswer = () => {
        const newAnswer = {
            id: newAnswers.length + 1,
            answer: "",
            correct_answer: 0,
        };
        setNewAnswers([...newAnswers, newAnswer]);
        console.log(newAnswers);
    };

    const onChangeHandler = (id, text, answers) => {
        const _newAnswers = answers.map((answer) => {
            if (answer.id == id) {
                answer.answer = text;
            }
            return answer;
        });
        return _newAnswers;
    };
    const onCheckHandler = (id, answers) => {
        const _newAnswers = answers.map((answer) => {
            if (answer.id == id) {
                answer.correct_answer = 1;
            } else {
                answer.correct_answer = 0;
            }
            return answer;
        });

        return _newAnswers;
    };

    const onSubmitHandler = async () => {
        if (hasAnswerValue() || createdQuestion == "") {
            return toast.error("Please fill all question and answers");
        }
        if (!hasCorrectAnswerValue()) {
            return toast.error("You need to add at least one correct answer");
        }

        const QnA = { question: createdQuestion, answers: newAnswers };
        console.log(QnA);
        router.post("/question", QnA);
        setCreatedQuestion("");
        setNewAnswers([
            {
                id: 1,
                answer: "",
                correct_answer: 0,
            },
        ]);
        close();
    };

    const onUpdateHandler = () => {
        router.put("/answers", selectedAnswers);
        setShowViewQuestionModal(false);
    };

    const onQuestionUpdateHandler = (id) => {
        console.log(id);
        router.put(route("question.update", { question: id }), {
            question: selectedQuestion,
        });
        setShowEditQuestionModal(false);
    };
    const onDeleteHandler = (id) => {
        // router.on('before',()=>{
        //     return confirm("Are you sure to delete this question?")
        // })
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("question.destroy", { question: id }));
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    const hasAnswerValue = () => {
        return newAnswers.find((answer) => {
            if (answer.answer == "") return true;
        });
    };

    const hasCorrectAnswerValue = () => {
        return newAnswers.find((answer) => {
            if (answer.correct_answer == 1) return true;
        });
    };

    const fetchQuestionAndAnswers = (id) => {
        const question = questions.find((item) => item.id == id);
        // console.log(question);
        setSelectedQuestionId(question.id);
        setSelectedQuestion(question.question);

        setSelectedAnswers(question.answers);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Question
                </h2>
            }
        >
            {alert && (
                <div className="bg-green-300 px-5 py-2 rounded-md mx-10 mt-5">
                    {message}
                </div>
            )}
            <Toaster position="top-center" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                <button
                    onClick={open}
                    className="px-3 py-2 rounded-md bg-blue-500 text-white mb-5"
                >
                    Create
                </button>

                {/* New Question Modal */}
                <Modal
                    zIndex={1000}
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
                        value={createdQuestion}
                        onChange={(e) => setCreatedQuestion(e.target.value)}
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
                            {newAnswers?.map(
                                ({ id, answer, correct_answer }) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td className="">
                                            <TextInput
                                                value={answer}
                                                onChange={(e) => {
                                                    const answers =
                                                        onChangeHandler(
                                                            id,
                                                            e.target.value,
                                                            newAnswers
                                                        );

                                                    setNewAnswers(answers);
                                                }}
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
                                                onChange={() => {
                                                    const answers =
                                                        onCheckHandler(
                                                            id,
                                                            newAnswers
                                                        );
                                                    setNewAnswers(answers);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                    <Divider />
                    <div className="float-right my-2">
                        <div className="flex gap-3 justify-center items-center">
                            {newAnswers.length < 4 && (
                                <button
                                    onClick={() => addNewAnswer()}
                                    className="px-2 py-1  rounded-md  text-xl  text-blue-500 "
                                >
                                    <AiOutlinePlus />
                                </button>
                            )}
                            <button
                                onClick={close}
                                className="px-2  py-1 rounded-md bg-red-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                            >
                                Close
                            </button>
                            {newAnswers.length > 3 && (
                                <button
                                    onClick={() => onSubmitHandler()}
                                    className="px-2 py-1  rounded-md bg-gray-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </Modal>

                {/* view Question and Answer Modal */}
                <Modal
                    zIndex={1000}
                    opened={showViewQuestionModal}
                    onClose={() => setShowViewQuestionModal(false)}
                    title="View Question and Answers"
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
                        value={selectedQuestion}
                        onChange={(e) => setSelectedQuestion(e.target.value)}
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
                            {selectedAnswers?.map(
                                ({ id, answer, correct_answer }) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td className="">
                                            <TextInput
                                                value={answer}
                                                onChange={(e) => {
                                                    const answers =
                                                        onChangeHandler(
                                                            id,
                                                            e.target.value,
                                                            selectedAnswers
                                                        );

                                                    setNewAnswers(answers);
                                                }}
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
                                                onChange={() => {
                                                    const answers =
                                                        onCheckHandler(
                                                            id,
                                                            selectedAnswers
                                                        );
                                                    setSelectedAnswers(answers);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                    <Divider />
                    <div className="float-right my-2">
                        <div className="flex gap-3 justify-center items-center">
                            <button
                                onClick={() => setShowViewQuestionModal(false)}
                                className="px-2  py-1 rounded-md bg-red-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                            >
                                Close
                            </button>

                            <button
                                onClick={() => onUpdateHandler()}
                                className="px-2 py-1  rounded-md bg-green-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>

                {/* Edit Question */}
                <Modal
                    zIndex={1000}
                    opened={showEditQuestionModal}
                    onClose={() => setShowEditQuestionModal(false)}
                    title="Edit Question"
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
                        value={selectedQuestion}
                        onChange={(e) => setSelectedQuestion(e.target.value)}
                    />
                    <Divider className="mt-5" />
                    <div className="float-right my-3">
                        <div className="flex gap-3 justify-center items-center">
                            <button
                                onClick={() => setShowEditQuestionModal(false)}
                                className="px-2  py-1 rounded-md bg-red-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                            >
                                Close
                            </button>

                            <button
                                onClick={() =>
                                    onQuestionUpdateHandler(selectedQuestionId)
                                }
                                className="px-2 py-1  rounded-md bg-green-500 hover:bg-opacity-90 text-sm active:bg-opacity-70 text-white "
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </Modal>

                {questions?.length > 0 ? (
                    <TableComponent
                        questions={questions}
                        setShowViewQuestionModal={setShowViewQuestionModal}
                        setShowEditQuestionModal={setShowEditQuestionModal}
                        fetchQuestionAndAnswers={fetchQuestionAndAnswers}
                        onDeleteHandler={onDeleteHandler}
                    />
                ) : (
                    <div className="w-full h-full flex justify-center items-center">
                        <Lottie
                            animationData={EmptyState}
                            loop={true}
                            className="w-[400px] h-[400px]"
                        />
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
