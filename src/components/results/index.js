import React, { Component } from 'react'
import { connect } from 'react-redux'

import Page from './page'
import store from '../../redux/store';


class Results extends Component {
    render(){
        const {results} = this.props
        
        return(
            < Page results = {results} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results,

    }
}


export default connect(mapStateToProps)(Results)
//conectamos un componente al estado 