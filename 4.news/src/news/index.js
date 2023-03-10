import axios from "../utils/axios";

export const newsCategory = {
  technology: "technology",
  science: "science",
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  sports: "sports",
};

class News {
  constructor(category) {
    this._category = category;
    this._searchTerm = "";
    this._pageSize = 10;
    this._currentPage = 1;
    this._totalPage = 1;
  }

  async getNews() {
    try {
      const { data } = await axios.get(this._getURL());
      this._totalPage = Math.ceil(data.totalResults / this._pageSize);

      return {
        articles: data.articles,
        totalPage: this._totalPage,
        category: this._category,
        currentPage: this._currentPage,
        totalResults: data.totalResults,
        isNext: this._isNext(),
        isPrev: this._isPrev(),
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  next() {
    if (!this._isNext) {
      throw new Error("Invalid Page Number");
    }
    this._currentPage++;
    return this.getNews();
  }

  previous() {
    if (!this._isPrev) {
      throw new Error("Invalid Page Number");
    }
    this._currentPage--;
    return this.getNews();
  }

  search(searchTerm) {
    this._searchTerm = searchTerm;
    return this.getNews();
  }

  setCurrentPage(pageNumber) {
    if ((pageNumber < 1) & (pageNumber > this._totalPage)) {
      throw new Error("Invalid Page Number");
    }
    this._currentPage = pageNumber;
    return this.getNews();
  }

  category(category) {
    this._category = category;
    this._currentPage = 1;
    this._totalPage = 1;
    return this.getNews();
  }

  _getURL() {
    let URL = "/?";
    if (this._category) URL += `category=${this._category}`;
    if (this._searchTerm) URL += `&q=${this._searchTerm}`;
    if (this._pageSize) URL += `&pageSize=${this._pageSize}`;
    if (this._currentPage) URL += `&page=${this._currentPage}`;
    return URL;
  }

  _isNext() {
    return this._currentPage < this._totalPage;
  }

  _isPrev() {
    return this._currentPage > 1;
  }
}

export default News;
