import React from 'react'
import Question from './Question'

const QuestionList = ({question}) => {
  return ( 
    <div>
      {question.length===0?
      <h1>Loading..</h1>
      :
      <div>
      {question.map((q)=>{
        return <Question key={q._id} q={q}/>
         })}
      </div>
      }
    </div>
  )
}

export default QuestionList