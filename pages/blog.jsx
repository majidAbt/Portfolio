import BlogCard from "../components/BlogCard"

function Blog() {
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            {blogsList.map((post) =>
                <BlogCard key={post.id} {...post} />)
            }
        </div>
    );
}


const blogsList = [
    {
        id: 0,
        title: "Lorem ipsum dolor sit amet",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }, {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }, {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }, {
        id: 4,
        title: "Lorem ipsum dolor sit amet",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },

]
export default Blog;
