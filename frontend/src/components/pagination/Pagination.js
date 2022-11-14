import React from 'react';

function Pagination( {goToPrevPage, goToNextPage} ) {

    return (
        <div>
            <button className={"simple"} onClick={goToPrevPage}>Previous</button>
            <button className={"simple"} onClick={goToNextPage}>Next</button>
        </div>
    );
}

export default Pagination;