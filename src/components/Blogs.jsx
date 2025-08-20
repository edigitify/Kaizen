const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business",
      date: "August 2025",
      excerpt:
        "Artificial Intelligence is transforming industries worldwide. Discover how businesses can leverage AI to improve efficiency and innovation.",
      image: "https://source.unsplash.com/600x400/?ai,technology",
    },
    {
      title: "Why Cybersecurity Matters in 2025",
      date: "July 2025",
      excerpt:
        "As businesses move to digital platforms, cybersecurity has become a top priority. Learn the best practices to keep your company safe.",
      image: "https://source.unsplash.com/600x400/?cybersecurity,hacking",
    },
    {
      title: "Cloud Solutions for Modern Enterprises",
      date: "June 2025",
      excerpt:
        "Cloud computing is the backbone of digital transformation. Find out how companies are adopting scalable and secure cloud solutions.",
      image: "https://source.unsplash.com/600x400/?cloud,server",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center tracking-tight">
          Our <span className="text-blue-500">Blogs</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Insights, trends, and updates from the world of technology.
        </p>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h3 className="text-2xl font-semibold text-blue-400 mt-2">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-300">{post.excerpt}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
