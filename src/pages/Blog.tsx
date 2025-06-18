
import { useQuery } from "react-query";
import { allBlogsApi, searchPage } from "@/Api";
import { useState } from "react";
import DOMPurify from "dompurify";
import Pagination from "@/components/Pagination";
import { useSearchContext } from "@/context/SearchContext";
// import { addBlogTypes } from "../../../backend/src/models/addBlog.models";
import {addBlogTypes} from "../Api";

const formatDate = (dateString: Date | string) => {
  if (!dateString) return "Unknown date";

  const date = new Date(dateString);

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const day = date.getDate().toString().padStart(2, '0');
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

// Skeleton UI Component
export const BlogSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse flex flex-col h-full"
          >
            <div className="w-full h-[200px] bg-gray-300" />
            <div className="p-6 flex flex-col flex-1">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6 mb-4"></div>
              <div className="h-3 bg-gray-300 rounded w-24 mb-4"></div>
              <div className="mt-auto">
                <div className="h-10 bg-gray-300 rounded w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-2">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="w-10 h-10 bg-gray-300 rounded-md animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

interface SingleBlogViewProps {
  blog: addBlogTypes; // Use the Blog interface
  onBack: () => void; // Explicitly define onBack as a function that returns void
}

const SingleBlogView = ({ blog, onBack }: SingleBlogViewProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to All Blogs
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {blog.imageFile && (
          <img
            src={blog.imageFile}
            alt={blog.title}
            className="w-full object-contain mx-auto"
            style={{ maxHeight: "600px" }}
          />
        )}

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold flex-1">{blog.title}</h1>
            <div className="text-sm text-gray-500 ml-4 flex-shrink-0">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(blog.date || blog.createdAt)}
              </div>
            </div>
          </div>
          <div className="text-gray-700 mb-8">
            <p>{blog.description}</p>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.textEditor),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AllBlogs = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null); // Specify type for selectedBlogId

  const searchParams = {
    title: search.title,
    page: page.toString(),
  };

  const queryKey = ["searchBlogs", searchParams.title, searchParams.page];
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery<addBlogTypes[]>({ // Explicitly type the data returned by allBlogsApi
    queryKey: ["allBlogs"],
    queryFn: allBlogsApi,
  });

  const { data: searchBlogs } = useQuery<{ data: addBlogTypes[]; pagination: { page: number; pages: number } }>(queryKey, () =>
    searchPage(searchParams)
  );

  if (isLoading) return <BlogSkeleton />;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">Failed to load blogs.</div>
    );

  const selectedBlog = selectedBlogId
    ? blogs?.find((blog) => blog._id === selectedBlogId)
    : null;

  const handleReadMore = (id: string) => { // Specify type for id
    setSelectedBlogId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedBlogId(null);
  };

  if (selectedBlog) {
    return <SingleBlogView blog={selectedBlog} onBack={handleBack} />;
  }

  // Sort blogs by creation date (newest first) - using your custom date field first, then createdAt
  const sortedBlogs = searchBlogs?.data ? [...searchBlogs.data].sort((a, b) => {
    const dateA = new Date(a.date || a.createdAt || 0).getTime(); // Get time in milliseconds
    const dateB = new Date(b.date || b.createdAt || 0).getTime(); // Get time in milliseconds
    return dateB - dateA; // Newest first
  }) : [];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full relative"
          >

            {blog.imageFile && (
              <img
                src={blog.imageFile}
                alt={blog.title}
                className="w-full object-contain"
                style={{ maxHeight: "200px" }}
              />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 line-clamp-3 mb-4">
                {blog.description}
              </p>

              {/* Date display */}
              <div className="text-sm text-gray-500 mb-4 flex items-center">

                {formatDate(blog.date || blog.createdAt)}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => handleReadMore(blog._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        page={searchBlogs?.pagination?.page || 1}
        pages={searchBlogs?.pagination.pages || 1}
        onPageChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default AllBlogs;