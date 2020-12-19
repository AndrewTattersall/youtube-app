import axios from 'axios';

const KEY = 'AIzaSyCcAP08FvCru_tjfzi_4VOSciK0KEZ74Jo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});