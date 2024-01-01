import Title from "./Title";
import { connect } from 'react-redux';


const Poll = ({ question, author, authedUser }) => {
    if (!question) {
      return <p>Question not found</p>;
    }
  
    const optionOneText = question.optionOne.text;
    const optionTwoText = question.optionTwo.text;
  
    const authorName = author.name;
  
    // Assuming the avatar URL is stored in the users object based on the user ID
    const authorAvatarURL = author.avatarURL;


    return (
        <div>
            <Title text={`Poll by ${authorName}`} />

            <p>Would you rather: </p>
            <div className="authorInfo">
                <img src={authorAvatarURL} alt={`${authorName}'s Avatar`} className="bigAvatar" />
            </div>
            <div className="questionOptions">
                <div className="Option">
                    <p>{optionOneText}</p>
                    <button>Vote</button>
                </div>
                <div className="Option">
                    <p>{optionTwoText}</p>
                    <button>Vote</button>
                </div>
            </div>

            
        </div>
    ); 
}


const mapStateToProps = (state) => {
    const selectedQuestionID = state.questions.selectedQuestionID;
    const question = selectedQuestionID ? state.questions[selectedQuestionID] : null;
    const authorID = question ? question.author : null;
    const author = authorID ? state.users[authorID] : null;
    const authedUser = state.authedUser;
  
    return {
      question,
      author,
      authedUser,
    };
  };
  
  export default connect(mapStateToProps)(Poll);
