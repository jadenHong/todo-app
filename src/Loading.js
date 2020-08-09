import React from 'react';

const Loading = ({ loadingObj }) => {
    return (
        <span>
            {`Loading ${loadingObj}...`}
        </span>
    )
}

export default Loading;