import React from 'react';
import IssueIcon from '../../icons/IssueIcon';
import './issuesHeader.css'

const IssuesHeader = () => {
    return (
        <div className="issuesHeader">
            <div className="all-issues">
                <IssueIcon/>
                <div className="open-issues">999 Open</div>
                <div className="close-issues">1100 Closed</div>
            </div>
            <div className='filters'>
                <div className="author">Author</div>
                <div className="label">Label</div>
                <div className="projects">Projects</div>
                <div className="milestone">Milestone</div>
                <div className="assignee">Assignee</div>
                <div className="sort">Sort</div>

            </div>
        </div>
    )
};

export default IssuesHeader;
