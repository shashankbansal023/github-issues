import React from 'react';
import './primaryHeader.css';

const PrimaryHeader = () => {
    return (
        <div className="primary-header">
            <div className="repo-details">
                <div className='repo-title'>facebook / react</div>
                <div className="repo-features">
                    <button className='notifications'>Notifications</button>
                    <button className='star'>Star</button>
                    <button className='fork'>Fork</button>
                </div>
            </div>
            <div className="tabs">
                <div className="code">Code</div>
                <div className="issues">Issues</div>
                <div className="pull-requests">Pull Requests</div>
                <div className="actions">Actions</div>
                <div className="projects">Projects</div>
                <div className="wiki">Wiki</div>
                <div className="security">Security</div>
                <div className="insights">Insights</div>
            </div>
        </div>
    )
};

export default PrimaryHeader;