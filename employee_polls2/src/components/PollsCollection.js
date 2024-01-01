import Title from "./Title";
import PollWidget from "./PollWidget";
import { connect } from 'react-redux';

const PollsCollection = ({title, authedUser, questions, questionsAnswered}) => {

    // Filter questions based on whether they are answered or unanswered
    const filteredQuestions = questions.filter(
    question =>
    questionsAnswered
    ? authedUser.answers.hasOwnProperty(question.id)
    : !authedUser.answers.hasOwnProperty(question.id)
    );

    // Sort questions based on timestamp in descending order
    const sortedQuestions = filteredQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
    );    

    return (
        <div className="PollsContainer">
            <Title text={title} />
            <hr />
            {sortedQuestions.map(question => (
                <PollWidget
                    className="Option"
                    key={question.id}
                    question={question}
                    authorname={question.author}
                    timestamp={new Date(parseInt(question.timestamp)).toLocaleString()}
                />
            ))}
        </div>
        
    ); 
}

const mapStateToProps = state => ({
  authedUser: state.authedUser,
  questions: Object.values(state.questions),
});

export default connect(mapStateToProps)(PollsCollection);

//export default PollsCollection;



