import React from 'react'
import SingleComment from './SingleComment'
import ServerLink from '../utils/ServerLink'
import PopupConfirm from './PopupConfirm'
import PopupEdit from './PopupEdit'
import strings from '../Constants/Strings'

const serverLink = new ServerLink,
    CONFIRM = 'confirm',
    EDIT = 'edit'
let editedComment = ''

class CommentsWrapper extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoading: true,
            comments: [],
            popupType: '',
            popupId: -1,
            popupKey: -1,
            popupComment: ''
        }

        this.handleShowPopup = this.handleShowPopup.bind(this)
        this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this)
        this.handleEditComment = this.handleEditComment.bind(this)
    }

    handleShowPopup(popupType, id, commentKey, comment) {
        this.setState({
            popupType: popupType,
            popupId: id,
            popupKey: commentKey,
            popupComment: comment
        })
    }

    handleDeleteConfirm() {
        let newComments = this.state.comments

        newComments.splice(this.state.popupKey, 1)
        serverLink.deleteComent(this.state.popupId).then(res => {
            this.setState({
                comments: newComments
            })
            this.handleShowPopup('', -1, -1, '')
        }).catch(e => {
            console.log('Error deleting - ', e)
        })

    }

    handleEditComment(e) {
        e.preventDefault();
        serverLink.editComment(this.state.popupId, editedComment).then(res => {
            let newComments = this.state.comments

            newComments[this.state.popupKey].comment = editedComment;
            this.setState({
                comments: newComments
            })
            this.handleShowPopup('', -1, -1, '')

        }).catch(e => {
            console.log('Error editing - ', e);
        })
    }

    handleUpdateComment(e) {
        editedComment = e.target.value
    }

    componentWillMount() {
        serverLink.getComments().then((comments) => {
            this.setState({
                isLoading: false,
                comments: comments.data
            })
        }).catch((e) => {
            console.error('### Cannot connect to server - ', e);
        })
    }

    render () {
        if (this.state.isLoading) {
            return (
                <div>{strings.loading}</div>
            )
        }

        return (
            <div className='comments-wrapper'>
                {this.state.popupType && this.renderPopup(this.state.popupType)}
                <ul>
                    {this.state.comments.map((commentData, commentKey) => {
                        return (
                            <SingleComment
                                commentData={commentData}
                                commentKey={commentKey}
                                onShowPopup={this.handleShowPopup}/>
                        )
                    })}
                </ul>
            </div>
        )
    }

    renderPopup(popupType) {
        editedComment = this.state.popupComment

        switch (popupType) {
            case CONFIRM:
                return (
                    <PopupConfirm
                    onCancel={() => {this.handleShowPopup('', -1, -1, '')}}

                    onConfirm={this.handleDeleteConfirm}/>
                )
                break
            case EDIT:
                return (
                    <PopupEdit
                    onCancel={() => {this.handleShowPopup('', -1, -1, '')}}

                    onConfirm={this.handleEditComment}
                    onUpdateComment={this.handleUpdateComment}
                    currentComment={this.state.popupComment}/>
                )

        }
    }
}

export default CommentsWrapper
