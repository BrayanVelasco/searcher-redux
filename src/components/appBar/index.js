import React, { Component } from 'react'


import Page from './page'
import store from '../../redux/store';
import { connect } from "react-redux";



//importamos la accion
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

class IAppBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            text:""
        }
        this.onChangeSelection = this.onChangeSelection.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
    }
    onChangeText(text){
        this.setState({text})
        this.props.findSuggestions(text)
    }

    onChangeSelection(text){
        this.setState({text})
        this.props.findResults(text)

    }

    render(){
        const {text} = this.props
        const {suggestions} = this.props
        
        return(
            < Page
            text={text}
            suggestions={suggestions}
            onChangeText={this.onChangeText}
            onChangeSelection={this.onChangeSelection}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,

    }
}
/*const mapDispatchToProps = (dispatch) => {
    return {
        findSuggestions:(text) => dispatch(findSuggestions(text))
    }
}*/

//LO hacemos como objeto
const mapDispatchToProps={
    findSuggestions,
    findResults
}

export default connect(mapStateToProps,mapDispatchToProps)(IAppBar)


//conectamos un componente al estado 