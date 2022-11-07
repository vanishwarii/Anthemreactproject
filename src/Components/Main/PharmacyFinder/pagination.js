import React from "react";
import {
  PageButtondiv,
  PaginationButton,
  Paginationprevbutton,
} from "../PharmacyFinder/Paginationstyle";
import { useState } from "react";
import { images } from "../../../Resources/image";
const Paginationshow = ({ totalPages, postperPage, setPageNumber }) => {
  console.log(totalPages, "totalpahed");
  // let pages = [];
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxpageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minpageNumberLimit, setminPageNumberLimit] = useState(0);
  const pages = totalPages / postperPage;
  // for (let i = 1; i <= Math.ceil(totalPages / postperPage); i++) {
  //   pages.push(i);
  // }
  // const preButton = () => {};
  // const nextButton = () => {
  //   console.log(pages);
  //   console.log(totalPages, "total");
  //   setmaxPageNumberLimit(maxpageNumberLimit + 1);

  //   // setPageNumber(pageNumber + 1);
  //   // if (pageNumber + 1 > maxpageNumberLimit) {
  //   //   setmaxPageNumberLimit(maxpageNumberLimit * pageNumberLimit);
  //   //   setminPageNumberLimit(minpageNumberLimit * pageNumberLimit);
  //   // }
  // };
  const setButtonColor = (id) => {
    document.getElementById(id).style.backgroundColor = "blue";
  };
  return (
    <PageButtondiv>
      <Paginationprevbutton
        src={images.left}
        onClick={() =>
          setminPageNumberLimit((prev) => {
            console.log(prev, "prev");
            return prev === 0 ? prev : prev - 1;
          })
        }
      ></Paginationprevbutton>
      {Array.from({ length: pages + 1 }, (_, i) => i).map((page, index) => {
        console.log(page, "page1");
        if (page < maxpageNumberLimit + 1 && page > minpageNumberLimit) {
          return (
            <>
              <PaginationButton
                id={index}
                key={index}
                onClick={() => {
                  setPageNumber(page);
                  setButtonColor(index);
                }}
              >
                {page}
              </PaginationButton>
            </>
          );
        } else {
        }
      })}
      <Paginationprevbutton
        src={images.right}
        onClick={() =>
          setmaxPageNumberLimit((next) =>
            next === pages.length ? next : next + 1
          )
        }
      ></Paginationprevbutton>
    </PageButtondiv>
  );
};
export default Paginationshow;
