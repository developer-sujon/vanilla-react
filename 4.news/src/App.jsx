//External Lib Import
import React, { Component } from "react";

//Internal Lib Import
import Header from "./components/Header";
import Loading from "./components/Loading";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import News, { newsCategory } from "./news";

const news = new News(newsCategory.technology);

class App extends Component {
  state = {
    data: {},
    isLoading: true,
  };

  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  }

  nextPage = () => {
    this.setState({ isLoading: true });
    if (this.state.data.isNext) {
      news
        .next()
        .then((data) => {
          this.setState({ data, isLoading: false });
        })
        .catch((e) => {
          console.log(e);
          this.setState({ isLoading: false });
        });
    }
  };

  previousPage = () => {
    if (this.state.data.isPrev) {
      news
        .previous()
        .then((data) => {
          this.setState({ data, isLoading: false });
        })
        .catch((e) => {
          console.log(e);
          this.setState({ isLoading: false });
        });
    }
  };

  search = (searchTerm) => {
    news
      .search(searchTerm)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  changeCategory = (category) => {
    news
      .category(category)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  setCurrentPage = (pageNum) => {
    news
      .setCurrentPage(pageNum)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
      });
  };

  handleCurrentPage = (pageNum) => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, currentPage: Number(pageNum) },
    });
  };

  render() {
    const { data, isLoading } = this.state;
    const { articles, totalResults, currentPage, totalPage, category } = data;
    return (
      <div className="col-6 offset-3">
        <Header
          category={category}
          search={this.search}
          changeCategory={this.changeCategory}
        />

        <div className="d-flex">
          <p className="text-black-50">About {totalResults} results found </p>{" "}
          &nbsp;
          <p className="text-black-50 ml-auto">{` ${currentPage} page of ${totalPage}`}</p>
        </div>

        {!isLoading && articles && articles.length > 0 && (
          <>
            <NewsList news={articles} />
            <Pagination
              nextPage={this.nextPage}
              isNext={this.state.data.isNext}
              previousPage={this.previousPage}
              isPrev={this.state.data.isPrev}
              totalResults={this.state.data.totalResults}
              currentPage={this.state.data.currentPage}
              setCurrentPage={this.setCurrentPage}
              handleCurrentPage={this.handleCurrentPage}
            />
          </>
        )}

        {isLoading && <Loading category="business" />}
      </div>
    );
  }
}

export default App;
