import React, { Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{
  render(){
    return (
      <main>
     <section>
       <p>{this.props.quiz_question.instruction_text}</p>
     </section>
     <section className="buttons">
       <ul>
        <QuizQuestionButton button_text={
        this.props.quiz_question.answer_options[0] }/>
        <QuizQuestionButton key={index}, button_text={answer_option}>
        {quiz_question={answer_option.map(function(answer_option, index){
                    return <li key={ index }>{answer_option}</li>;
        }})}
       </ul>
     </section>
   </main>
   )
  }
}

export default QuizQuestion
