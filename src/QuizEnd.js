import React, { Component} from 'react'

class QuizEnd extends Component{
  handleResetClick(){
    <a onClick='this.handleResetClick.bind(this)'></a>
  }
  render(){
    return(
      <div>
       <p>Thanks for playing!</p>
       <a href=''>Reset Quiz</a>
     </div>
    )
  }
}

export default QuizEnd
