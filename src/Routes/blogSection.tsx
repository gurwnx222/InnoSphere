import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The most Popular Business Of the Year",
      image: "/api/placeholder/400/320",
      author: "Ranold Jeff.",
      date: "May 4th, 2022"
    },
    {
      id: 2,
      title: "The most Popular Business Of the Year",
      image: "/api/placeholder/400/320",
      author: "Patricia Anderson",
      date: "Apr 27th, 2022"
    },
    {
      id: 3,
      title: "The most Popular Business Of the Year",
      image: "/api/placeholder/400/320",
      author: "Elaine Luna",
      date: "Apr 20th, 2022"
    }
  ];

  return (
    <div className="bg-[#0F1B3A] min-h-screen p-8">
      <div className="max-w-6xl mx-auto pt-24 pb-16">
        <div className="text-center mb-16">
          <h3 className="text-[#FF5D73] text-xl font-medium mb-3">\\ Our Blog \\</h3>
          <h2 className="text-[#0F1B3A] dark:text-white text-5xl font-bold">Latest Post</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-3">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div className="p-6">
                <h3 className="text-[#FF5D73] text-xl font-semibold mb-1">{post.title}</h3>
                <div className="flex items-center mt-4">
                  <img src="/api/placeholder/40/40" alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="text-[#0F1B3A] font-medium">{post.author}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;