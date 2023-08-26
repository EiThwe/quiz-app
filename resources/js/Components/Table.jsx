import { Button, Table } from "@mantine/core";

const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export default function TableComponent({
    questions,
    setShowViewQuestionModal,
    setShowEditQuestionModal,
    fetchQuestionAndAnswers,
    onDeleteHandler
}) {
    const ths = (
        <tr>
            <th className="w-[50px]">ID</th>
            <th>Question</th>
            <th className="w-[200px]">Action</th>
        </tr>
    );

    const rows = questions.map((question,index) => (
        <tr key={index+1}>
            <td>{index+1}</td>
            <td>{question.question}</td>

            <td>
                <div className="flex gap-1">
                    <button
                        onClick={() => {
                            setShowViewQuestionModal(true);
                            fetchQuestionAndAnswers(question.id);
                        }}
                        className="px-3 py-[4px] rounded-md bg-blue-500 text-white text-sm"
                    >
                        View
                    </button>
                    <button
                        onClick={() => {
                            setShowEditQuestionModal(true);
                            fetchQuestionAndAnswers(question.id);
                        }}
                        className="px-3 py-[4px] rounded-md bg-green-500 text-white text-sm"
                    >
                        Edit
                    </button>
                    <button onClick={()=>onDeleteHandler(question.id)} type="button" className="px-3 py-[4px] rounded-md bg-red-500 text-white text-sm">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    ));

    return (
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
    );
}
