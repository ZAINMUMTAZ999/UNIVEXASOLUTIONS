// import React, { useState, useEffect } from "react";
// import { useQuery } from "react-query";
// import { allBlogsApi, AllUserFetching } from "@/Api";
// import { Link } from "react-router-dom";
// import { Button } from "./ui/button";
// import DOMPurify from "dompurify";
// import { addBlogTypes } from "../../../backend/src/models/addBlog.models";
// // import { AddJobTypes } from "../../../backend/src/models/addJob.models";


// // Define prop type for the component
// type SearchDataPageProps = {
//   job: addBlogTypes[] | addBlogTypes;
// }

// const SearchDataPage: React.FC<SearchDataPageProps> = () => {
//   // Ensure job is always an array
//  const { data: blogs, isLoading } = useQuery({
//     queryKey: ["allBlogs"],
//     queryFn: allBlogsApi,
//   });
//   console.log(blogs)
  
//   // State to track the selected job
 

//   // Find the currently selected job
// //   const selectedJob = jobArray.find(j => j._id === selectedJobId) || jobArray[0];
  
//   // React Query for user data
// //   const userQueryKey = ["user", "profile"];
// //   const { data: userFetchingData, isLoading: userLoading } = useQuery(
// //     userQueryKey,
// //     AllUserFetching,
// //     {
// //       staleTime: Infinity,
// //       cacheTime: Infinity,
// //       refetchOnMount: false,
// //       refetchOnWindowFocus: false,
// //       refetchOnReconnect: false,
// //     }
// //   );

//   // Set first job as selected on initial render
// //   useEffect(() => {
// //     if (jobArray.length > 0 && !selectedJobId) {
// //       setSelectedJobId(jobArray[0]._id);
// //     }
// //   }, [jobArray]);

//   // Format date function


// //   if (userLoading) return <div className="flex justify-center p-4">Loading user data...</div>;
// //   if (!userFetchingData) return <div className="flex justify-center p-4">User data not available</div>;

//   return (
//     <div className="max-w-7xl mx-auto p-4">
      
//       <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
   
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left Side - Job List */}
//         <div className="w-full lg:w-2/5 space-y-4 overflow-auto max-h-[calc(100vh-12rem)]">
//           {blogs.map((j) => (
//             <div
//               key={j._id}
             
              
//             >
//               <h3 className="font-bold text-lg">{j.title}</h3>
//               <div className="flex justify-between items-center mt-1">
//                 {/* <p className="text-gray-700">{j.companyName}</p> */}
//                 {/* Display formatted date */}
//                 {/* <p className="text-sm text-gray-500">Posted: {formatDate(j.date)}</p> */}
//               </div>
//               <div className="flex justify-between items-center mt-2">
//                 {/* <p className="text-gray-700">{j.companysIndustry}</p> */}
//                 {/* <p className="font-semibold">${j.salary}</p> */}
//               </div>
//             </div>
//           ))}
//         </div>

      
//       </div>
//     </div> 
//   );
// };

// export default SearchDataPage;