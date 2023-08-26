<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            [
                "id" => 1,
                "question" => "What does HTML stands for",
                "created_at" => now(),
                "updated_at" => now()

            ],
            [
                "id" => 3,
                "question" => "What is the correct Html element for the largest heading",
                "created_at" => now(),
                "updated_at" => now()

            ],
            [
                "id" => 2,
                "question" => "Who is making the Web Standards",
                "created_at" => now(),
                "updated_at" => now()

            ],
            [
                "id" => 4,
                "question" => "What is the correct Html element for inserting a line break",
                "created_at" => now(),
                "updated_at" => now()

            ],
            [
                "id" => 5,
                "question" => "What is the correct html for add a background color",
                "created_at" => now(),
                "updated_at" => now()
            ]
        ];

        $answers =
            [

                [
                    [
                        "id" => 3,
                        "answer" => "Home Tool Makeup Language",
                        "question_id" => 1,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 4,
                        "answer" => "How To Make Language",
                        "question_id" => 1,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 1,
                        "answer" => "Hyper Text Markup Language",
                        "question_id" => 1,
                        "correct_answer" => 1,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 2,
                        "answer" => "Hyperlinks and Text Markup Language",
                        "question_id" => 1,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ]
                ], [
                    [
                        "id" => 12,
                        "answer" => "<h1>",
                        "question_id" => 3,
                        "correct_answer" => 1,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 11,
                        "answer" => "<heading>",
                        "question_id" => 3,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 10,
                        "answer" => "<h6>",
                        "question_id" => 3,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 9,
                        "answer" => "<head>",
                        "question_id" => 3,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ]
                ], [
                    [
                        "id" => 7,
                        "answer" => "Mozilla",
                        "question_id" => 2,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 6,
                        "answer" => "The World Wide Web Consortium",
                        "question_id" => 2,
                        "correct_answer" => 1,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 8,
                        "answer" => "Microsoft",
                        "question_id" => 2,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 5,
                        "answer" => "Google",
                        "question_id" => 2,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ]
                ], [
                    [
                        "id" => 14,
                        "answer" => "<bl>",
                        "question_id" => 4,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 13,
                        "answer" => "<br>",
                        "question_id" => 4,
                        "correct_answer" => 1,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 15,
                        "answer" => "<hr>",
                        "question_id" => 4,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 16,
                        "answer" => "<b>",
                        "question_id" => 4,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ]
                ], [
                    [
                        "id" => 20,
                        "answer" => "<div>Yellow</div>",
                        "question_id" => 5,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 17,
                        "answer" => "<background>Yellow</background>",
                        "question_id" => 5,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 18,
                        "answer" => "<body style=\"background-color:yellow;\">Yellow</body>",
                        "question_id" => 5,
                        "correct_answer" => 1,
                        "created_at" => now(),
                        "updated_at" => now()
                    ],
                    [
                        "id" => 19,
                        "answer" => "<body bg=\"yellow\">Yellow</body>",
                        "question_id" => 5,
                        "correct_answer" => 0,
                        "created_at" => now(),
                        "updated_at" => now()
                    ]
                ]

            ];

        Question::insert($questions);
        foreach ($answers as $answer) {
            Answer::insert($answer);
        }
    }
}
