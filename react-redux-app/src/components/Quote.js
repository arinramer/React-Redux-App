import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

const Quote = (props) => {
    return (
        <div>
            <h1 style={{color: 'orange'}}>Trump quotes</h1>
            {!props.quote && !props.isFetching && <p>Stupid things Donald Trump says</p>}
            {props.isFetching && <p>...</p>}
            {props.quote}
            <br/>
            <button style={{margin: '1%'}} onClick={props.getQuote}>Random Trump quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getQuote })(Quote);