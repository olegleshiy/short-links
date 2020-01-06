import React from 'react';

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Link</h2>

            <p>Shorted link: <a href={ link.to } target='_brank' rel='noopener noreferrer'>{ link.to }</a></p>
            <p>From link: <a href={ link.from } target='_brank' rel='noopener noreferrer'>{ link.from }</a></p>
            <p>Amount of clicks on the link: <strong>{ link.clicks }</strong></p>
            <p>Data created: <strong>{ new Date(link.date).toLocaleDateString() }</strong></p>
        </>
    );
};
