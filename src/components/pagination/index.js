
import React from "react";
import {  getPagesArr } from "../utils/pages";


export const PaginationComponents =({totalPages, page, changePage}) =>{
    let pagesArr = getPagesArr(totalPages);
    return (

            <div className="wrapperPage">
                {pagesArr.map(pag => <span
                    onClick={() => changePage(pag)}
                    className={page === pag ? "page pageCurrent" : "page"}
                    key={pag}
                >
                    {pag}
                </span>)}
            </div>
)
}