import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './News.css';
import axios from 'axios';

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsItems: [],
        }
    }

    componentDidMount() {
        axios.get('https://hackerhunt.co/api/daily/0')
        .then(response => this.setState({newsItems: response.data.data}));
    }

    render(){


        let searchedData = this.state.newsItems.filter(item => {
            let title = item.desc.toLowerCase();
            return title.includes(this.props.search);
        });

        let filteredData = searchedData.filter((item) => {
            if(this.props.filterTag !== 'All'){
                return item.tags.toLowerCase().includes(this.props.filterTag.toLowerCase());
            } else {
                return searchedData;
            }         
        })

        let data = filteredData.map(item=> {
            return (
                <NewsItem 
                key={item.id} 
                title={item.title} 
                desc={item.desc}
                author = {item.author}
                votes={item.votes}
                responses={item.comments}
                date={new Date(Number(item.date)).getHours()} 
                tags={item.tags}
                link={item.link}
                />
            );
        }); 
        return (
            <div>
                <p className="News-header">Showing: <span> {this.props.filterTag}</span></p>
                {data}
            </div>
        )
    }
}

export default News;