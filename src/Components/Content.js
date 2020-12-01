import React from 'react';

const Content = ({ tab }) => {
    return (
        // display content of the selected tab
        <div className = "tabcontent">
            <h3> { tab.title } </h3>
            <p> { tab.content } </p>
        </div>
    )
}

export default Content;