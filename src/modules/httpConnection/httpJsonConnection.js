const httpJsonConnection = async (url, body, resSuc, resFail) => {
    console.log('cccc',url);    
    
    let sendData = JSON.stringify(body);
    let json = await fetch(url, {
      method: 'POST',
      body: sendData,
      headers:{
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer',
        'Acess-Control-Allow-Origin' : 'http://172.30.1.59:3000'
      }
    })
      .then(res => res.json())
      .catch(err =>console.log(`${err}`));

   return json;
  };
  
  export default httpJsonConnection;