import React from 'react';
import ActionsIcon from '../../icons/ActionsIcon';
import CodeIcon from '../../icons/CodeIcon';
import Fork from '../../icons/Fork';
import InsightsIcon from '../../icons/InsightsIcon';
import IssueIcon from '../../icons/IssueIcon';
import ProjectsIcon from '../../icons/ProjectsIcon';
import PullRequestIcon from '../../icons/PullRequestIcon';
import RepoIcon from '../../icons/RepoIcon';
import SecurityIcon from '../../icons/SecurityIcon';
import Star from '../../icons/Star';
import WikiIcon from '../../icons/WikiIcon';
import './primaryHeader.css';

const tabs = [
    {
        label: 'Code',
        icon : <CodeIcon/>,
        className: 'code',
    },
    {
        label: 'Issues',
        icon: <IssueIcon/>,
        className: 'issues',
    },
    {
        label: 'Pull requests',
        icon: <PullRequestIcon/>,
        className: 'pull-requests'
    },
    {
        label : 'Actions',
        icon: <ActionsIcon/>,
        className: 'actions',
    },
    {
        label : 'Projects',
        icon : <ProjectsIcon/>,
        className: 'projects'
    },
    {
        label: 'Wiki',
        icon : <WikiIcon/>,
        className: 'wiki',
    },
    {
        label: 'Security',
        icon: <SecurityIcon/>,
        className: 'security'
    },
    {
        label: 'Insights',
        icon: <InsightsIcon/>,
        className: 'insights',
    }
]

const featureTabs = [
    {
        label :'Notifications',
    },
    {
        label: 'Star',
        icon : <Star/>
    },
    {
        label: 'Fork',
        icon : <Fork/>
    }
]

const PrimaryHeader = () => {
    return (
        <div className="primary-header">
            <div className="repo-details">
                <div className='repo-title'>
                <RepoIcon />
                <span className='heading'>facebook</span> / react
                <button className="repo-type">Public</button>
                </div>
                <div className="repo-features">
                    {
                        featureTabs.map(item => {
                            return (
                                <button className="featureTab">{item.icon} {item.label}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="tabs">
                {
                    tabs.map((tab) => {
                        return (
                            <div className={`tab ${tab.className}`}>
                                <div className="icon">{tab.icon}</div>
                                <div className="heading">{tab.label}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default PrimaryHeader;