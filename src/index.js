import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";

class QuizApp extends Component {
  state = {
    questionBank: []
  };
  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        questionBank:question
      });
    });
  };
  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    })
  }
  componentDidMount() {
    this.getQuestions();
  }

  render() {
      return {
        <div className="container">
          <div className="title">QuizApp</div>
          {this.state.questionBank. length > 0 && this,state,questionBank.map(({question, answers,
            correct, questionID}) => ( <QuestionBox question={question} options={answers} key={questionID} />
            )}

            {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}) /> : null}
          </div>
    );
  }
}

ReactDOM.render(<QuizApp />, document.getElementById("root"));
