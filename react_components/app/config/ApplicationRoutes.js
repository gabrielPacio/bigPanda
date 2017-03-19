import React from 'react'
import { Route, hashHistory, IndexRoute, Router } from 'react-router'
import Main from '../components/Main'
import CommentsWrapper from '../components/CommentsWrapper'

class ApplicationRoutes extends React.Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Main}>
                    <IndexRoute component={CommentsWrapper} />
                </Route>
            </Router>
        )
    }
}

export default ApplicationRoutes
