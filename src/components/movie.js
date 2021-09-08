import React from 'react';
import { IoIosRibbon } from 'react-icons/io';

const Movie = ({ title, releaseDate, director, producer, latest }) => {
    return (
        <div>

            <div className={'movie-title'}>
                {title}
            </div>
            {latest ?
                <div className={'latest-movie'}>
                    recent
                </div> : null}
            <div className={'movie-details'}>
                <div>
                    <span className={'details-label'}>Released On:</span>
                    <span>{releaseDate}</span>
                </div>
                <div>
                    <span className={'details-label'}>Directed By:</span>
                    <span>{director}</span>
                </div>
                <div>
                    <span className={'details-label'}>Produced By:</span>
                    <span>{producer}</span>
                </div>
            </div>
        </div>
    )
}

export default Movie;