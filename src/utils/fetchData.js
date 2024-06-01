export const exerciseOptions = {
  
    
        method: 'GET',
       
        headers: {
          'X-RapidAPI-Key': '704cb25d57msh3b8a9cf867ab479p152c8bjsn96e9bb8e5ae0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
};

export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key':  process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const  BMIOptions={
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'ebb5798d40msh2dee37a15ecc99ep1e7f0cjsn908a523b7908',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }

};


export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data=await response.json();
    //console.log(data);
    return data;
    
}