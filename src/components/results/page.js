import React, { Fragment } from "react";
import AppBar from '../appBar'
import { Typography } from "@material-ui/core";
import './styles.css'

function Page (props){

    const {
        results,

    } = props

    const isEmpty = results.length === 0;
    return (
        <Fragment>
            <AppBar></AppBar>

            <div className="results-page">
                {
                    isEmpty
                    ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    null
                }
            </div>
        </Fragment>
    )
}

export default Page