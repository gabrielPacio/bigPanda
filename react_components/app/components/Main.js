import React from 'react'

class Main extends React.Component {

    render () {
        return (

            <div className='main-container'>
                <header>
                    <h1>Comment Section</h1>
                </header>
                {this.props.children}
                <footer>
                    <small>Exercise from Gabriel Paciornik to BigPanda</small>
                </footer>
            </div>
        )
    }
}

export default Main
