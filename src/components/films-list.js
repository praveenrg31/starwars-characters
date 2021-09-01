import React, {useEffect} from 'react';
import { fetchFilmList } from '../redux/actions/films-actions';
import { ScaleLoader } from 'react-spinners';
import { Alert } from 'reactstrap';
import { connect } from "react-redux";

const FilmsList = (props) => {
    const { fetching, error, films } = props.filmState;

    useEffect(() => {
        if (props.characterSelected) {
            props.fetchFilmList();
        }
    }, [props.characterSelected]);

    return (
        <div className="film-list-container">
            {fetching ? <ScaleLoader color={'black'} />
                : error ? <Alert color="warning">
                    {error}
                </Alert>
                    : films.length ?
                    <>
                        <span>Movies List:</span>
                        <div className="movie-list">
                        {films.map(e => (
                            <span key={e.id}>{e.title}</span>
                        ))}
                        </div>
                        <span>Recent Movie:</span>
                        <div className="recent-movie">
                            <span>"{films[0].title}" released on {films[0].releaseDate}</span>
                        </div>
                    </>
                        : props.characterSelected ? <div> No Films to display</div>: null}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        characterSelected: state.characterState.characterSelected,
        filmState: state.filmState
    }
}

export default connect(mapStateToProps, { fetchFilmList })(FilmsList);
