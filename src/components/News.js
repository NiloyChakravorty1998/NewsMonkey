import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps ={
    country : 'in',
    pageSize : 8,
    category: 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor() {
    super();
    console.log('Hello i am a constructor');
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af04607202994f13a82c258439b4c08f&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  handleNext = async () => {
    console.log("Next click fired");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af04607202994f13a82c258439b4c08f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
  };

  handlePrevious = async () => {
    console.log("Previous click fired");
    if (this.state.page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af04607202994f13a82c258439b4c08f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      });
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af04607202994f13a82c258439b4c08f&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: 1,
        articles: parsedData.articles
      });
    }
  };

  render() {
    const { articles } = this.state;
  
    return (
      <div className="container my-3">
        <h2>NewsMonkey top headlines</h2>
        <div className="row row-cols-2 row-cols-md-4">
          {articles && articles.length > 0 ? (
            articles.map((element) => (
              <div className="col mb-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          ) : (
            <p>No articles found.</p>
          )}
        </div>
        <div className="container d-flex justify-content-evenly">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-info"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
  
  

}

