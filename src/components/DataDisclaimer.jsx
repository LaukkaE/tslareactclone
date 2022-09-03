import React from 'react';

const DataDisclaimer = ({ textcolor = 'black', bgcolor = 'white' }) => {
    const css = {
        color: textcolor,
        backgroundColor: bgcolor,
        paddingTop: '1rem',
        maxWidth: '700px',
        paddingBottom: '150px',
        textAlign: 'center',
        margin: 'auto',
    };

    return (
        <div className="disclaimer" style={css}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            maxime neque laboriosam quo quae ab voluptatum sed expedita harum
            blanditiis, id consequuntur molestias inventore corporis quos
            laborum nisi officia nulla.
        </div>
    );
};

export default DataDisclaimer;
