const FetchGitData = async()=>{

    let response = await fetch ('https://api.github.com/users/AvinashRajput12')
    let data = await response.json();
    return data ;
  
  };
  
  export default  FetchGitData;;