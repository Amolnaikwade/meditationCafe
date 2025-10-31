import React from "react";
import "./BlogSection.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Import images from assets folder
import yogaClass1 from "../assets/yogaclass1.jpg";
import yogaClass2 from "../assets/yogaclass2.jpg";

const blogs = [
  {
    id: 1,
    category: "Stretching",
    date: "January 10, 2024",
    title: "11 Signs for Online Yoga Teacher Training",
    description:
      "Completing your online yoga teacher training enables you to transform lives, build a flexible...",
    image: yogaClass1, // ✅ use imported variable
  },
  {
    id: 2,
    category: "Balancing",
    date: "January 09, 2024",
    title: "Balancing Act On and Beyond The Yoga Mat",
    description:
      "Nurturing balance in our daily lives can be challenging, with the constant juggle of multiple resp...",
    image: yogaClass2, // ✅ use imported variable
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <div className="blog-tag">Our Latest Blog</div>
        <h2 className="blog-title">Explore Our Blog Community</h2>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="blog-container">
        <button className="nav-btn left">
          <FaArrowLeft />
        </button>

        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category">{blog.category}</span> |
                <span className="date"> {blog.date}</span>
              </div>
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="blog-desc">{blog.description}</p>
              <a href="#" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}

        <button className="nav-btn right">
          <FaArrowRight />
        </button>
      </div>

      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default BlogSection;
