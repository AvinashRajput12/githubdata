
import { useLoaderData } from "react-router-dom";


function GitHub() {
let gitData =useLoaderData()
console.log(gitData);

//  const [gitData , setGitData] = useState([]);
//  useEffect(()=>{
//   const fetchGitData = async()=>{

//     let response = await fetch ('https://api.github.com/users/AvinashRajput12')
//     let data = await response.json();
//   setGitData(data)
  
//   };
// fetchGitData();
//  },[]);
 
 

  return (
    <>
     <div className="flex items-center h-screen text-lg leading-10 gap-x-10 max-lg:flex-col max-sm:px-3 max-lg:px-8 justify-evenly">
      <img className="object-cover w-auto rounded-full max-xl:h-1/2 max-lg:h-2/5 max-md:h-1/3" src={gitData.avatar_url} alt="" />
      <div className="w-1/2 max-lg:w-full">
        <h1><span className="pr-2 font-semibold capitalize">Name:</span>{gitData.name}</h1>
        <p><span className="pr-2 font-semibold capitalize">Username:</span>{gitData.login}</p>
        <p><span className="pr-2 font-semibold capitalize">Bio:</span>{gitData.bio}</p>
        <div className="flex gap-x-4 max-sm:gap-x-1">
          <p className="py-2 mt-8 text-white bg-orange-700 rounded-md px-7 max-sm:px-4 max-sm:text-sm hover:bg-orange-800"><span className="pr-2 font-semibold capitalize">Repository:</span>{gitData.public_repos}</p>
          <p className="py-2 mt-8 text-white bg-orange-700 rounded-md px-7 max-sm:px-4 max-sm:text-sm hover:bg-orange-800"><span className="pr-2 font-semibold capitalize">Followers:</span>{gitData.followers}</p>
          <p className="py-2 mt-8 text-white bg-orange-700 rounded-md px-7 max-sm:px-4 max-sm:text-sm hover:bg-orange-800"><span className="pr-2 font-semibold capitalize">Following:</span>{gitData.following}</p>
        </div>

      </div>
    </div>
    <div className="flex items-center justify-center h-screen text-5xl text-orange-700 capitalize">Not fetch GitHub Data </div>
    </>
  )
}

export default GitHub;
