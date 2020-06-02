import React from "react";
import './SeaBattle.css';

import {changeGameBegin, generateField, makeShoot, refreshField} from "../../actions/creators";
import {connect} from "react-redux";

const my_cells = {
    O: "ship-cell",
    "*": "empty-cell",
    "-": "shot-cell",
    X: "shot-ship"
};


const enemy_cells = {
    O: "enemy-ship-cell",
    "*": "empty-cell",
    "-": "shot-cell",
    X: "shot-ship"
};

class SeaBattle extends React.Component {
    constructor(props) {
        super(props);

        this.props.refreshField();
    }

    renderField(field, cells, onClickFunction) {
        return (
            <div className="field">
                {[...Array(10).keys()]
                    .map(row => {
                        return (
                            <div> {
                                [...Array(10).keys()].map(col =>
                                    <span className={cells[field.getField[row][col]]}
                                          onClick={() => onClickFunction(row, col)}/>)
                            }
                            </div>
                        )
                    })
                }

            </div>
        )
    }

    render() {
        return (
            <div className="sea-battle">
                { this.renderField(this.props.my_field, my_cells, (row, col)=>{}) }
                { this.renderField(this.props.comp_field, enemy_cells, this.props.makeShoot)}
                <button className={ "play-button" } onClick={ this.props.generateField }>
                    Generate Field</button>
                <button className={ "play-button" } onClick={ this.props.changeGameBegin }>
                    Play</button>
                <button className={ "play-button" } onClick={ this.props.refreshField }>
                    Restart</button>
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    my_field: state.my_field,
    comp_field: state.comp_field
});

const mapDispatchToProps = (dispatch) => ({
    refreshField: () => dispatch(refreshField()),
    makeShoot: (row, col) => dispatch(makeShoot(row, col)),
    generateField: () => dispatch(generateField()),
    changeGameBegin: () => dispatch(changeGameBegin())
});

export default connect(mapStateToProps, mapDispatchToProps)(SeaBattle);