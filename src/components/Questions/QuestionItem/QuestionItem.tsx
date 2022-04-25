import AnswerItem from "../AnswerItem/AnswerItem";
import classes from "./QuestionItem.module.css";
import { ReactComponent as ArrowUp } from "./../../../assets/svg/up.svg";
import { ReactComponent as ArrowDown } from "./../../../assets/svg/down.svg";
import { useState } from "react";

interface QuestionItemProps{
  id:string,
  question:string,
  answer:string
}


const QuestionItem:React.FC<QuestionItemProps> = ({id, question, answer }) => {
  const [quest, setQuest] = useState<string>('');
  const [showAnswer, setShowAnser] = useState<boolean>(false);

  const toggleAnswersHandler = () => {
    setQuest(id);
    setShowAnser((prevState) => !prevState);
  };

  return (
    <li className={classes.question} onClick={toggleAnswersHandler}>
      <div className={classes.answer}>{showAnswer ? <ArrowUp /> : <ArrowDown />}</div>
      <div>{question} </div>
      {showAnswer && (quest === id && <AnswerItem data={answer} />)}
    </li>
  );
};

export default QuestionItem;
