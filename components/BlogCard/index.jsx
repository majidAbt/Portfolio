import Avatar from "./../../public/assets/icons/avatar.svg";
import Image from "next/image";
import styles from "./BlogCard.module.css"
import Github from "../../public/assets/icons/Github";
import BlogTitle from "../BlogTitle";

const BlogCard = ({ imgSrc, title, desc, author, date, titleColor, borderColor, shortDesc }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={`${styles.slide} ${styles.slide1} `}>
            <div className={`${styles.content}`}>
              <BlogTitle title={title} titleColor={titleColor} borderColor={borderColor} desc={shortDesc} />
            </div>
          </div>

          <div className={`${styles.slide} ${styles.slide2} `}>
            <div className={styles.content}>
              <h3 className="text-white">
                {title}
              </h3>
              <p>{desc}</p>
              <p style={{ marginTop: "3rem", color: "lightblue" }} className="mt-4 text-[primary] cursor-pointer ">
                Read More
              </p>
            </div>
          </div>
        </div>



      </div>

    </>

  )
}

export default BlogCard