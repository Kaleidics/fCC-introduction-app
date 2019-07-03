import React from "react";
import { connect } from 'react-redux';
import { fetchIntros } from '../actions/index';

export class Introductions extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchIntros());
    }

    render() {
        console.log(this.props.intros);
        return (
            <div>
                hi
            </div>
        )
    }
}

const mapStateToProps = state => ({
    intros: state.intros
});

export default connect(mapStateToProps)(Introductions)