import React, { Component } from "react";
import NewsItem from './NewsItem'
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "india",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired, // Ensure setProgress is a function and required
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsMonkey`;
  }

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    const { country, category } = this.props;
    const { page, articles } = this.state;

    // Call setProgress to indicate loading
    this.props.setProgress(30); // Update progress to 30%

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a1e9d73c1c2243a4a07bfd4a9660af20 &page=${page}&pageSize=20`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      articles: [...articles, ...data.articles],
      totalResults: data.totalResults,
    });

    // Call setProgress to indicate loading completion
    this.props.setProgress(100); // Update progress to 100%
  };

  handlePrevClick = async () => {
    await this.setState((prevState) => ({
      page: prevState.page - 1,
    }));
    await this.fetchData();
  };

  handleNextClick = async () => {
    await this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    await this.fetchData();
  };

  fetchMoreData = () => {
    const { page, totalResults, articles } = this.state;
    if (articles.length < totalResults) {
      this.setState({ page: page + 1 }, () => {
        this.fetchData();
      });
    }
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <h2 className="text-center" style={{ margin: '35px 0px', marginTop:'90px' }}>
          NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} headlines
        </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={article.title || "Untitled"}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  Author={article.author}
                  date={article.publishedAt}
                />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}