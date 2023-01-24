import React ,{useEffect, useState, useRef } from 'react';
import IssueIcon from '../../icons/IssueIcon';
import CommentIcon from '../../icons/CommentIcon';
import './githubIssues.css';

const GITHUB_ISSUES_API = "https://api.github.com/repos/facebook/react/issues"

const GithubIssues = () => {

    const [data , setData] = useState([]);
    const [page , setPage] = useState(1);
    const [loading , setLoading] = useState(false);
    const pageRef = useRef(null);
    const loadingRef = useRef(null);
    pageRef.current = page;
    loadingRef.current = loading;


    const handleScroll = () => {

        let userScrollHeight = window.innerHeight + window.scrollY;
        let windowBottomHeight = document.documentElement.offsetHeight;

        if (userScrollHeight >= windowBottomHeight-20 && !loadingRef.current) {
        setPage(pageRef.current + 1);
        }
    }

    useEffect (()=> {
        window.addEventListener('scroll' , handleScroll);

        return () => window.removeEventListener('scroll' , handleScroll);
    },[])

    useEffect(()=> {
        const fetchData = async() => {
            try{
                setLoading(true);
                const res = await fetch(`${GITHUB_ISSUES_API}?page=${page}`);
                const resData = await res.json();
                setData([...data , ...resData]);
            }
            catch(err){
                console.log("err debug");
                window.removeEventListener('scroll', handleScroll); 
                setLoading(false);
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();
    },[page])


    const timeDifference = (createdTime) => {
        const date = new Date().getHours();
        const createdDate = new Date(createdTime).getHours();

        const diff = date - createdDate;
        return diff > 24 ? `${Math.floor(diff /3)} days` : `${diff} hours`
    }
    return (
        <>
        <div className="container">
            {
                data.map((obj)=> {
                    return (
                        <>
                        <div className="rowItem" key={obj.id}>
                            <IssueIcon/>
                            <div className='issueItem'>
                                <div className="title">{obj.title}</div>
                                {
                                    obj.labels.map((label) => {
                                        return (
                                            <span  className="labelItem" style={{backgroundColor: `#${label.color}` }} key={label.node_id}>{label.name}</span>
                                        )
                                    })
                                }
                            </div>
                            {obj.user.avatar_url ? <div className='user-icon'>
                                <img className='img-icon' src={obj.user.avatar_url} width="30" height="30" alt="user-img"/>
                            </div>: null}
                            {obj.comments ? <div className='comments'>
                                <CommentIcon/> {obj.comments}
                            </div>: null}
                        <div className="user-details" key={obj.number}>#{obj.number} opened {timeDifference(obj.created_at)} ago by {obj.user.login}</div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        {loading && <div className="loading">Loading ...</div>}

        </>
    )
};

export default GithubIssues;