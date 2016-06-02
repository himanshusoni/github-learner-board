import axios from 'axios'

// const getDocument = () => axios.get('https://github.com/sindresorhus/awesome/blob/master/readme.md')

export default function getDocument(username){
    // return axios.get('https://api.github.com/repos/sindresorhus/awesome/contents/readme.md')
    return axios.get('https://api.github.com/repos/enaqx/awesome-react/contents/README.md')
}
