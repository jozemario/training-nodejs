import React, { Fragment } from 'react';
export default (children) => {
    return (
        <Fragment>
            <div className="card rounded-none">{children}</div>
        </Fragment>
    );
};
