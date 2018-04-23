import Api from '../api';

export default class Recommendation {
  
  static recommendationProduct = () => {
    return Api.post('', {
      params: {
        callback: 'X'
      },
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      let responseRequest = response.data;
      if(responseRequest[0] === 'X'){
        responseRequest = responseRequest.slice(2, responseRequest.length - 3);
        responseRequest = JSON.parse(responseRequest).data;
      }
      return responseRequest;
    })
      .catch(error => {
        console.log(error);
        return error;
        });
  }
}