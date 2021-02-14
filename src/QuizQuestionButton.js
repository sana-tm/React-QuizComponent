import React, { Component} from 'react'

class QuizQuestionButton extends Component{
  handleClick(){
    this.props.clickHandler(button_text)
    if (button_text === this.props.quiz_question.answer){
      this.props.showNextQuestionHandler()
    }
  }
  render(){
    return(
<li>
<button onclick={this.handleClick.bind(this)}></button>
</li>
   )
  }
}

export default QuizQuestionButton
