import React, { useState } from 'react';
import Title from "./Title";
import PollsCollection from "./PollsCollection";
import '../App.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('new');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Title text={"Polls Dashboard"} />

      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button className={`tab-button ${activeTab === 'new' ? 'active' : ''}`} onClick={() => handleTabChange('new')}>
          New Questions
        </button>
        <button className={`tab-button ${activeTab === 'done' ? 'active' : ''}`} onClick={() => handleTabChange('done')}>
          Done
        </button>
      </div>

      {/* Display PollsCollection based on activeTab */}
      {activeTab === 'new' && <PollsCollection title={"New Questions"} questionsAnswered={0} />}
      {activeTab === 'done' && <PollsCollection title={"Done"} questionsAnswered={1} />}
    </div>
  );
};

export default Dashboard;