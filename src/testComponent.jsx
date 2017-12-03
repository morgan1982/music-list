import React from 'react';


const testComponent = (props) => {
    const { headline, count, showCount } = props;

    return (
            <div>
                <h1>{headline}</h1>
                { showCount ? <p>{count}</p> : null}
            </div>
        )
}

export default testComponent;




