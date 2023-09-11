import { Link, Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Quiz({ auth, laravelVersion, phpVersion, questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(
        questions[currentQuestionIndex]
    );
    const [selectedAnswerId, setSelectAnswerId] = useState(null);
    const [score, setScore] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setCurrentQuestion(questions[currentQuestionIndex]);
    }, [currentQuestionIndex]);

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1 && isSelected == true) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsSelected(false);
        }
    };
    const scoreCalculate = (index) => {
        score[currentQuestionIndex] =
            currentQuestion.answers[index].correct_answer;
        setIsSelected(true);
        setScore(score);
    };

    const submitHandler = () => {
        console.log(score);
        const totalScore = score.reduce((pv, cv) => (pv += cv), 0);
        router.post("result", {
            total_score: totalScore,
            total_question: questions.length,
        });
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="header fixed top-0 left-0 right-0 sm:py-6 py-4 sm:px-[6rem] px-[1rem] flex justify-between items-center sm:gap-5 gap-2">
                    <div className="shrink-0">
                        <img
                            src="https://i.postimg.cc/pTD8L4ZM/quiz.png"
                            alt=""
                            className="block h-12 w-auto fill-current"
                        />
                    </div>
                    <div className="sm:text-3xl text-lg font-bold flex-1">
                        Quiz Section
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

                                {/* <Link
                                    href={route("register")}
                                    className=" font-semibold text-gray-400 hover:text-blue-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-blue-500"
                                >
                                    Register
                                </Link> */}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className="text-center py-6 text-xl font-bold text-blue-500">
                        Question {currentQuestionIndex + 1} out of{" "}
                        {questions.length}
                    </div>
                    <div className="max-w-lg text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:mx-auto mx-3">
                        <p className="w-full text-center text-xl px-4 py-6  font-bold border-b border-gray-200 rounded-t-lg">
                            {currentQuestion.question} ?
                        </p>
                        {currentQuestion.answers.map(({ answer, id }, i) => (
                            <button
                                onClick={() => scoreCalculate(i)}
                                key={i}
                                type="button"
                                className="w-full px-4 py-6 text-lg font-medium text-left border-b border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                    <div className="max-w-lg flex-1 py-6">
                        {currentQuestionIndex < questions.length - 1 ? (
                            <button
                                onClick={() => nextQuestion()}
                                className="px-3 py-2 rounded-md bg-blue-400 hover:bg-blue-500 active:bg-opacity-70 text-white float-right"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={() => submitHandler()}
                                className="px-3 py-2 rounded-md bg-green-400 text-white float-right"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
