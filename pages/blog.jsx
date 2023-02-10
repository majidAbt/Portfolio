import BlogCard from "../components/BlogCard"

function Blog() {
    return (
        <div className="sm:p-[2rem] md:p-[3rem] lg:p-[3rem] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 m-auto">
            {blogsList.map((post) =>
                <BlogCard key={post.id} {...post} />)
            }
        </div>
    );
}


const blogsList = [
    {
        id: 0,
        title: "HTML & CSS",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        titleColor: "text-darkred",
        borderColor: "border-darkred"

    },
    {
        id: 1,
        title: "Javascript",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        titleColor: "text-darkorange",
        borderColor: "border-darkorange"


    }, {
        id: 2,
        title: "React js",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        titleColor: "text-darkblue",
        borderColor: "border-darkblue"


    }, {
        id: 3,
        title: "Typescript",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        titleColor: "text-darkpurple",
        borderColor: "border-darkpurple"


    }, {
        id: 4,
        title: "Redux",
        imgSrc: "https://www.computerhope.com/jargon/b/binary.jpg",
        author: "Majid",
        date: "18 Aug",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        titleColor: "text-darkgreen",
        borderColor: "border-darkgreen"


    },

]
export default Blog;
