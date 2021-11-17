import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Pagination({
  currentPage,
  setCurrentPage,
  searchQuery,
  setSearchQuery,
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
}) {
  const history = useHistory();
  const [pages] = useState(Math.ceil(data.length / dataLimit));

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  console.log("hustory", history);

  const incrementPageBy = (pageIncrement) => {
    const currentPage = parseInt(history.location.pathname.split("/").pop());
    const futurePage = currentPage + pageIncrement;
    if (futurePage < 1) return currentPage;
    return futurePage;
  };

  return (
    <div>
      <div className="database-container">
        {getPaginatedData().map((data, index) => (
          <RenderComponent key={index} pokeIndex={index} pokemon={data} />
        ))}
        {console.log("current page: ", currentPage)}
      </div>

      {/* show pagination */}
      <div className="pagination">
        {/* Previous button */}
        <Link to={`/database/${incrementPageBy(1)}`}>
          <button className="pagination-detail" onClick={goToPreviousPage}>
            Prev
          </button>
        </Link>

        {/* page numbers */}
        {getPaginationGroup().map((item, index) => (
          <Link to={`/database/${index + 1}`}>
            <button
              key={index}
              onClick={changePage}
              className={`pagination-detail pagination-number  paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              {console.log(item)}

              <span>{item}</span>
            </button>
          </Link>
        ))}
        {/* Next button */}
        <Link to={`/database/${incrementPageBy(-1)}`}>
          <button className="pagination-detail" onClick={goToNextPage}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pagination;
