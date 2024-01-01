import Title from "./Title";
import PollsCollection from "./PollsCollection";

const Dashboard = () => {

    return (
        <div>
            <Title text={"Polls Dashboard"} />
            <PollsCollection title={"New Questions"}></PollsCollection>
            <PollsCollection title={"Done"}></PollsCollection>
        </div>
    ); 
}

export default Dashboard;



