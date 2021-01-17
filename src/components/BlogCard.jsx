import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
class BlogCard extends Component {
  render() {
    let { blog } = this.props;
    return (
      <div className={styles["container1"]}>
        <img
          className={styles["banner-image"]}
          src={blog.imageUrl}
          alt={blog.title}
        />
        <p>
          <Link
            className={styles["blog-title"]}
            to={{ pathname: `blogs/${blog.id}`, state: { id: blog.id } }}
          >
            {blog.title}
          </Link>
        </p>
      </div>
    );
  }
}
export default BlogCard;
