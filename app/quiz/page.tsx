"use client";
import quizimage from "@/public/04.png";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import React from "react";
import globalStyles from "@/utils/global";
import StyleInspo, { StyleData } from "./styleinspo";

export default function Quiz() {
  //ubacit jos krugova
  const [quiz, setQuiz] = React.useState<any[]>([]);
  const [styleInspoData, setStyleInspoData] = React.useState<StyleData[]>([]);
  const [exactStyleInspo, setExactStyleInspo] = React.useState<StyleData>();
  const [selectedAnswers, setSelectedAnswers] = React.useState<{
    [key: number]: number;
  }>({});
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [clickedButton, setClickedButton] = React.useState<number | null>(null);

  //dohvati sva pitanja
  React.useEffect(() => {
    refetchQuiz();
    getStyleInspo();
  }, []);

  function refetchQuiz() {
    axios
      .get("https://json-server-api-delta.vercel.app/quiz")
      .then((res) => {
        setQuiz(res.data);
      })
      .catch((error) => {
        console.error("Error fetching quiz data: ", error);
      });
  }

  function getStyleInspo() {
    axios
      .get("https://json-server-api-delta.vercel.app/styleinspo")
      .then((res) => {
        setStyleInspoData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching styleinspo data: ", error);
      });
  }
  const handleAnswerSelect = (questionIndex: number, answerId: number) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionIndex]: answerId,
    }));
    if (clickedButton === answerId) {
      setClickedButton(null);
    } else {
      setClickedButton(answerId);
    }
  };
  const isCurrentQuestionAnswered = clickedButton !== null;

  const handleNextQuestion = (): void => {
    //na sljedece pitanje
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setClickedButton(null);
  };

  const allQuestionsAnswered = currentQuestion === quiz.length - 1;

  const calculateResult = () => {
    const answerCount: { [key: number]: number } = {};

    // zbroji koliko je tocno tih odgovora
    for (const answerId of Object.values(selectedAnswers)) {
      answerCount[answerId] = (answerCount[answerId] || 0) + 1;
    }

    // nadi onaj koji je najvise odgovaran
    //parseint zato sta .keys vraca niz stringova
    const mostSelectedAnswerId = +Object.keys(answerCount).reduce((a, b) =>
      answerCount[parseInt(a)] > answerCount[parseInt(b)] ? a : b
    );

    if (styleInspoData) {
      const styleInspo: StyleData | undefined = styleInspoData.find(
        (inspo) => inspo.id === mostSelectedAnswerId
      );
      setExactStyleInspo(styleInspo);
      console.log(styleInspo);
    }

    return mostSelectedAnswerId;
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5">
        <div className="absolute bg-pink rounded-full h-[25rem] w-[25rem] ml-28"></div>
        <div className=" mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              Take a quiz
            </h1>
          </div>
          <div className="col-start-2 col-span-2">
            <p className="text-center mt-10">
              Take this easy quiz and we will show you some of the most <br />
              flattering clothes for your shape this season, and share some
              <br />
              valuable tips to help you confidently shop for clothes that
              <br /> work for you, so you enjoy getting dressed!
            </p>
          </div>
          <div className="p-5">
            <Image src={quizimage} alt="quiz" className="h-52 w-auto" />
          </div>
        </div>
      </div>

      {!exactStyleInspo && quiz[currentQuestion] && (
        <div
          key={currentQuestion}
          className="my-10 flex flex-col items-center "
        >
          <h1 className="bg-hotpink text-center text-2xl py-1 w-5/6 mb-5">
            {quiz[currentQuestion].questionText}
          </h1>
          {quiz[currentQuestion].answers.map((answer: any) => (
            <button
              key={answer.index}
              className={`border border-text_color flex p-3 m-3 w-3/5 relative hover-button ${
                clickedButton === answer.id ? "clicked" : ""
              }`}
              onClick={() => handleAnswerSelect(currentQuestion, answer.id)}
            >
              {answer.answerText}
              <style jsx global>
                {globalStyles}
              </style>
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center">
        {!allQuestionsAnswered && (
          <div className="w-5/6 flex justify-end mt-4 my-20">
            <button
              onClick={handleNextQuestion}
              disabled={!isCurrentQuestionAnswered}
              className="border border-text_color h-10 w-[250px] relative hover-button text-lg disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none disabled:pointer-events-none"
            >
              Next
            </button>
          </div>
        )}
        {allQuestionsAnswered && (
          <div className="w-5/6 flex justify-end mt-4 my-20">
            <button
              onClick={() => calculateResult()}
              disabled={!isCurrentQuestionAnswered}
              className="border border-text_color h-10 w-[250px] relative hover-button text-lg  disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none disabled:pointer-events-none "
            >
              Calculate Result
            </button>
          </div>
        )}
      </div>

      {exactStyleInspo && <StyleInspo styleInspo={exactStyleInspo} />}

      <div className="absolute h-[40rem] w-[40rem] -right-0 bottom-0 -z-[10] overflow-hidden">
        <div className="bg-pink rounded-full w-full h-full absolute -right-36 -bottom-3"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
