import Title from "./Title";
import PollWidget from "./PollWidget";

const PollsCollection = ({title}) => {

    return (
        <div className="PollsContainer">
            <Title text={title} />
            <hr />
            <PollWidget username='Sam' timestmap={"2022-05-05 10:12:00"} onShowClick="01"></PollWidget>
            <PollWidget username='Lina' timestmap={"2022-05-15 10:20:00"} onShowClick="02"></PollWidget>
            <PollWidget username='Farah' timestmap={"2022-05-07 10:30:00"} onShowClick="03"></PollWidget>
            <PollWidget username='Hadi' timestmap={"2022-05-06 10:42:00"} onShowClick="04"></PollWidget>
        </div>
        
    ); 
}

export default PollsCollection;



