import axios from 'axios';

const COMMENTS_URL = 'http://localhost:3000/comments',
    config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    }

class ServerLink {

    getComments() {
        return axios.get(COMMENTS_URL);
    }

    editComment(id, comment) {
        axios.defaults.baseURL = COMMENTS_URL;
        return axios({
            method: 'put',
            url: '/' + id,
            data: {
                comment: comment
            }
        })
    }

    deleteComent(id) {
        axios.defaults.baseURL = COMMENTS_URL;
        return axios({
            method: 'delete',
            url: '/' + id
        })
    }
}

export default ServerLink
