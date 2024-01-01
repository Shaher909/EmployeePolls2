
const PollWidget = ({username, timestmap, onShowClick}) => {

    return (
        <div className="PollWidget">
            <p>{username}</p>
            <p>{timestmap}</p>
            <button onClick={onShowClick}>Show</button>
        </div>
    ); 
}

export default PollWidget;



