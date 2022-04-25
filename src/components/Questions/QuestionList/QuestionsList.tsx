import React from "react"
import { DUMMY_QUESTIONS } from "../../../DUMMY_DATA/dummyQuestions"
import classes from './QuestionsList.module.css'
import QuestionItem from "../QuestionItem/QuestionItem"


//QuestionList component gets DUMMY_QUESTIONS data, maps over it and passes it
// as props to QuestionItem component

const QuestionList:React.FC =()=>{
      return(
        <React.Fragment>
            <ul className={classes.list}>
                {DUMMY_QUESTIONS.map((question)=>{
                    return <QuestionItem
                    id={question.id}
                    key={question.id}
                    question={question.question}
                    answer={question.answer}
                    />
                })}
                </ul>
      
        </React.Fragment>
    )
}
export default QuestionList

