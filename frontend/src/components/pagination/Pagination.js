import React from 'react';

function Pagination( {goToPrevPage, goToNextPage} ) {

    return (
        <div>
            <button onClick={goToPrevPage}>Previous</button>
            <button onClick={goToNextPage}>Next</button>
        </div>
    );
}

export default Pagination;