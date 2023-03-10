import React, { Component } from "react";

class Pagination extends Component {
  state = {
    isEditable: false,
  };

  changeCurrentPage = (e) => {
    console.log(e);
    if ((e.key = "Enter")) {
      if (this.props.isNext || this.props.isPrev) {
        this.props.setCurrentPage(Number(e.target.value));
      }
      this.setState({ isEditable: false });
    }
  };

  render() {
    const {
      currentPage,
      totalResults,
      nextPage,
      isNext,
      previousPage,
      isPrev,
      handleCurrentPage,
    } = this.props;

    return (
      <div className="d-flex my-5 align-items-center">
        <button
          className="btn btn-warning"
          onClick={previousPage}
          disabled={!isPrev}
        >
          Previous
        </button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input
              type="number"
              value={currentPage}
              className="form-control"
              onChange={(e) => handleCurrentPage(e.target.value)}
              onKeyDown={(e) => this.changeCurrentPage(e)}
            />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Double Tap to Jump Page"
              onDoubleClick={() =>
                this.setState({ isEditable: !this.state.isEditable })
              }
            >
              {currentPage} of {totalResults}
              <br />
              <small>Double Tap to Edit</small>
            </p>
          )}
        </div>
        <button
          className="btn btn-warning ml-auto"
          onClick={nextPage}
          disabled={!isNext}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
