import classes from "./AnswerItem.module.css";

//AnswerItem component recereives answer to specific question as props
//from QuestionItem component and renders it

const AnswerItem:React.FC<{data:string}> = ({data}) => {
  return <p className={classes.answer}>{data}</p>;
};

export default AnswerItem;
