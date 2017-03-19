import React from 'react'
import strings from '../Constants/Strings'

class PopupConfirm extends React.Component {
    render () {
        return (
            <div>
                <div className='popup'>
                    <h3>{strings.sure}</h3>
                    <button className='btn btn-confirm' type='button' onClick={this.props.onConfirm}>{strings.confirm}</button>
                    <button className='btn btn-cancel'type='button' onClick={this.props.onCancel}>{strings.cancel}</button>
                </div>
                <a href='#' onClick={this.props.onCancel} className='modal'></a>
            </div>
        )
    }
}

PopupConfirm.propTypes = {
    onConfirm: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired
}

export default PopupConfirm
