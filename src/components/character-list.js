import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchCharacterList, setCharacterSelected } from '../redux/actions/character-actions';
import ReactSelect from 'react-select';
import { ScaleLoader } from 'react-spinners';
import { Alert } from 'reactstrap';

const CharacterList = (props) => {

    const { fetching, error, characters } = props.characterState;
    console.log(props);
    useEffect(() => {
        props.fetchCharacterList();
    }, []);

    const onCharacterChange = (item) => {
        console.log(item);
        if(item.value) {
            props.setCharacterSelected(item.value);
        }
    }
    return (
        <div className="character-list">
            {fetching ? <ScaleLoader color={'black'} />
                : error ? <Alert color="warning">
                   {error}
                </Alert>
                    : characters.length ?
                        <div>
                            <ReactSelect
                                options={characters.map(e => ({ label: e.name, value: e.id }))}
                                onChange={onCharacterChange}
                                placeholder={'Select Character...'}
                            />
                        </div>
                        : <div> No Characters to display</div>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        characterState: state.characterState
    };
};

export default connect(mapStateToProps, { fetchCharacterList, setCharacterSelected })(CharacterList);


