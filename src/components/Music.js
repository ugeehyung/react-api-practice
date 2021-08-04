import React from 'react';
import PropTypes from 'prop-types';
import './Music.css'; 
// ./ : 현재 파일

function Music({ poster, title, artist }) {
    return (
        <div className="music"> 
                <img src={poster} alt={title} title={title}/>        
            <div className = "music__data">
                <h3 className="music__title">{title}</h3>
                <h5 className="music__artist">{artist}</h5>
            </div>
        </div>
    );
}

Music.propTypes = {
    poster : PropTypes.string.isRequired,
    album : PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
};

export default Music;