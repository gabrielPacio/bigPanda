import React from 'react'
import strings from '../Constants/Strings'

class PopupEdit extends React.Component {
    render () {
        return (
            <div>
                <div className='popup'>
                    <form>
                        <h3>{strings.edit_your_comment}</h3>
                        <textArea autoFocus rows='3' cols='40' onChange={this.props.onUpdateComment} defaultValue={this.props.currentComment}></textArea>
                        <button className='btn btn-edit' type='button' onClick={this.props.onConfirm}>{strings.edit}</button>
                        <button className='btn btn-cancel' type='button' onClick={this.props.onCancel}>{strings.cancel}</button>
                    </form>
                </div>
                <a href='#' onClick={this.props.onCancel} className='modal'></a>
            </div>
        )
    }
}

PopupEdit.propTypes = {
    onConfirm: React.PropTypes.func.isRequired,
    onUpdateComment: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired
}

export default PopupEdit
