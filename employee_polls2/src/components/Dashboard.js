import Title from "./Title";
import PollsCollection from "./PollsCollection";

const Dashboard = () => {

    return (
        <div>
            <Title text={"Polls Dashboard"} />
            <PollsCollection title={"New Questions"} questionsAnswered={0}></PollsCollection>
            <PollsCollection title={"Done"} questionsAnswered={1}></PollsCollection>
        </div>
    ); 
}

export default Dashboard;



