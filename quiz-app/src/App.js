import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Header } from './Components/Header'
import { Questions } from './Components/Questions'
import { Quiz } from './Components/Quiz'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {quiz:[]}
  }
  getQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(quizObject =>
        // console.log(quizObject)
        // console.log(quizObject.results)
        this.setState({quiz: quizObject.results})
      )
  }
  getAnswer = (e) => {
    
  }
  render() {
    console.log(this.state.quiz)
    let quiz = this.state.quiz.map(ques => <Quiz item={ques} onClickAnswer={this.getAnswer}/>)
    return (
      <React.Fragment>
        <Header />
        <Questions onClick={this.getQuestion} />
        {quiz}
      </React.Fragment>
    )
  }
}

export default App;
