import React from 'react'

class SingleComment extends React.Component {
    render () {
        return (
            <li className='single-comment'>
                <a className='ico ico-delete'
                    onClick={() => this.props.onShowPopup('confirm', this.props.commentData.id, this.props.commentKey, this.props.commentData.comment)}
                    href='#'>
                </a>
                <a className='ico ico-edit'
                    onClick={() => this.props.onShowPopup('edit', this.props.commentData.id, this.props.commentKey, this.props.commentData.comment)}
                    href='#'>
                </a>
                <h4>{this.props.commentData.email}</h4>
                <p>{this.props.commentData.comment}</p>
            </li>
        )
    }
}

SingleComment.propTypes = {
    onShowPopup: React.PropTypes.func.isRequired,
    commentData: React.PropTypes.shape({
        email: React.PropTypes.string,
        comment: React.PropTypes.string
    })
}

export default SingleComment
