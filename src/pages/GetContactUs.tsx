
 import { useQuery } from "react-query";
import {  searchPageContact } from "@/Api";
// import { addBlogTypes } from "../../../backend/src/models/addBlog.models";
import { useState } from "react";
// import DOMPurify from "dompurify";
import Pagination from "@/components/Pagination";
import { useSearchContext } from "@/context/SearchContext";
// import { addBlogTypes } from "../../../backend/src/models/addBlog.models";
import { BlogSkeleton } from "./Blog";
// import { addBlogTypes } from "../../../backend/src/models/addBlog.models";
// import { useNavigate } from "react-router-dom";

// This component shows a single blog in full detail
// interface SingleBlogViewProps {
//   blog: addBlogTypes;
//   onBack: () => void; // onBack is a function that takes no arguments and returns nothing
// }
// const SingleBlogView = ({ blog, onBack }:SingleBlogViewProps) => {
//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <button
//         onClick={onBack}
//         className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 mr-2"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//         Back to All Blogs
//       </button>

//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {blog.imageFile && (
//           <img
//             src={blog.imageFile}
//             alt={blog.title}
//             className="w-full object-contain mx-auto"
//             style={{ maxHeight: "600px" }}
//           />
//         )}

//         <div className="p-8">
//           <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

//           <div className="text-gray-700 mb-8">
//             <p>{blog.description}</p>
//           </div>

//           <div className="border-t border-gray-200 pt-8">
//             {/* <h2 className="text-xl font-semibold mb-4">Full Content</h2> */}
//             <div
//               className="prose max-w-none"
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(blog.textEditor),
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Main component that shows all blogs or a single blog
const GetContactUs = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
   const searchParams = {
    title: search.title,
    // companysIndustry: search.companysIndustry,
    // jobLocation: search.jobLocation,
    // sortOption: search.sortOption,
    page: page.toString(),
  };

  // const [selectedBlogId, setSelectedBlogId] = useState(null);
  const queryKey = ["allContactUsList", searchParams.title, searchParams.page];
//   const {
//     data: blogs,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["getContactUsApi"],
//     queryFn: getContactUsApi,
//   });
  const { data: allContactUsList ,isLoading,error} = useQuery(queryKey, () =>
    searchPageContact(searchParams)
  );
  
  
  console.log("allContactUsList", allContactUsList);

//   console.log(typeof blogs);
// console.log(blogs)

  if (isLoading)
    return <BlogSkeleton/>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">Failed to load blogs.</div>
    );

  // If a blog is selected, find it
// const selectedBlog = selectedBlogId
//   ? allContactUsList?.data?.find((blog) => blog._id === selectedBlogId)
//   : null;


  // Handle Read More click
  // const handleReadMore = (id) => {
  //   setSelectedBlogId(id);
  //   // Scroll to top for better UX
  //   window.scrollTo(0, 0);
  // };

  // Handle going back to all blogs
  // const handleBack = () => {
  //   setSelectedBlogId(null);
  // };

  // If a blog is selected, show only that blog
  // if (selectedBlog) {
  //   return <SingleBlogView blog={selectedBlog} onBack={handleBack} />;
  // }

  // Otherwise show the list of all blogs
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Contacts list</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {allContactUsList?.data?.map((blog) => (
    <div
      key={blog._id}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex flex-col flex-1 space-y-2">
        <div>
          <span className="font-bold underline text-gray-800">Name:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.name}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Email:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.email}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Phone Number:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.phoneNumber}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Interested In:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.interestedIn}</span>
        </div>
        <div>
          <span className="font-bold underline text-gray-800">Message:</span>{" "}
          <span className="text-gray-700 font-normal">{blog?.message}</span>
        </div>
      </div>
    </div>
  ))}
</div>

           <Pagination
  page={allContactUsList?.pagination?.page || 1}
  pages={allContactUsList?.pagination?.pages || 1}
  onPageChange={(page) => setPage(page)}
/>

    </div>
  );
};

export default GetContactUs;
 