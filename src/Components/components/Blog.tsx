import React, { useState, useCallback } from 'react';
import SingleBlog from './SingleBlog';

type Blog = {
  name: string;
  email: string;
  comment: string;
  dateTime: string;
};

const BlogComponent: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const addBlog = useCallback((name: string, email: string, comment: string) => {
    const newBlog: Blog = {
      name,
      email,
      comment,
      dateTime: new Date().toLocaleString(),
    };

    setBlogs(prevBlogs => [newBlog, ...prevBlogs]);
  }, []);

  const handleBlogSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const comment = formData.get('comment') as string;

    if (name && email && comment) {
      addBlog(name, email, comment);
      e.currentTarget.reset();
    }
  };

  const handleSeeMoreClick = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(' ')}...`;
    }
    return text;
  };

  return (
    <div className="bg-gray-100 p-4 min-h-full font-sans gap-5">
      <div className="mb-4 flex gap-10" >
        <form onSubmit={handleBlogSubmit} className="space-y-4">
        <div className="text-xl grid font-bold mb-2">Leave a Comment:</div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-white border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-white border border-gray-300 p-2 rounded w-full"
          />
          <textarea
            name="comment"
            placeholder="Comment"
            required
            className="bg-white border border-gray-300 p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className='w-[90%]' >
          {selectedBlog && (
            SingleBlog(selectedBlog.name, selectedBlog.email, selectedBlog.comment, selectedBlog.dateTime)
          )}
        </div>
      </div>

      <div className="mt-8 grid h-full">
        <div className="text-md font-bold mb-2">Comments:</div>
        <div className="grid grid-cols-3 gap-4 ">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white border border-gray-300 p-4 rounded shadow-sm" onClick={() => handleSeeMoreClick(blog)}>
              <div className='mt-2 text-md  text-gray-400"'>{blog.name}</div>
              <div className="mt-2 text-xs text-gray-400">{blog.dateTime}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
