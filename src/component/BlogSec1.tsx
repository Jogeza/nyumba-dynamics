import React from "react";
import { Link } from "react-router-dom";
import { siteImages } from "../data/siteImages.ts";
import blogData from "../data/blogData.json";

/* ---------------- Image Map ---------------- */
const blogImages: Record<string, string> = {
    "electrical": siteImages.electrical,
    "plumbing": siteImages.plumbing2,
    "cctv": siteImages.cctv1,
    "pool": siteImages.pool,
    "landscaping": siteImages.landscaping,
    "cleaning": siteImages.cleaning2,
};

/* ---------------- Types ---------------- */
interface BlogItem {
    id: number;
    image: string;
    date: string;
    title: string;
    desc: string;
    link: string;
}

interface BlogSec1Props {
    limit?: number;
}

const BlogSec1: React.FC<BlogSec1Props> = ({ limit }) => {
    const displayedBlogs: BlogItem[] = limit
        ? blogData.slice(0, limit)
        : blogData;


    return (
        <div className="row home-blog-row blogPage-row2">
            {displayedBlogs.map((blog) => (
                <div
                    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                    key={blog.id}
                >
                    <Link to={blog.link} className="blog-box-main zoom_in">
                        <div className="blog-img-main">
                            <img
                                src={blogImages[blog.image] || siteImages.maintenance}
                                alt={blog.title}
                                loading="lazy"
                            />
                            <h3 className="blog-date">{blog.date}</h3>
                        </div>
                        <div className="blog-containe-main">
                            <h2>{blog.title}</h2>
                            <p>{blog.desc}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogSec1;
