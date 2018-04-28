import React from 'react';
import './NewsItem.css';
import voteIcon from './assets/vote.svg';
import responsesIcon from './assets/responses.svg';

const NewsItem = (props) => {
    return (
        <div className="NewsItem">
            <div className="NewsItem-options">
                <div className="NewsItem-votes">
                    <a className="NewsItem-vote-link" href="#/"><img className="NewsItem-vote-icon" src={voteIcon} alt="Votes" /></a>
                    <span className="NewsItem-vote-count">{props.votes}</span>
                </div>
                <div className="NewsItem-responses">
                    <img className="NewsItem-responses-icon" src={responsesIcon} alt="Responses" />
                    <span className="NewsItem-responses-count">{props.responses}</span>
                </div>
            </div>
            <div className="NewsItem-information">
                <a href={props.link} className="NewsItem-title">
                {props.title}
                </a>
                <p className="NewsItem-desc">
                {props.desc}
                </p>
                <div className="NewsItem-meta-info">
                    {props.date} hours ago by <a href="#/" className="NewsItem-user">{props.author}</a>
                    <div className="NewsItem-tags">
                        {
                            props.tags.split(',').map((tag, index) => <a key={index} className="NewsItem-tag" href="#/">{tag}</a> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;