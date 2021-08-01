import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Music( { photo, title, artist }) {
    return (
        <div className="music"> 
                <img src={photo} alt={title} title={title}/>        
            <div className = "music__data">
                <h3 className="music__title">{title}</h3>
                <h5 className="music__artist">{artist}</h5>
            </div>
        </div>
    );
}

Music.propTypes = {
    photo : PropTypes.string.isRequired,
    album : PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
};

export default Music;