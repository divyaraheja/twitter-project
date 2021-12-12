import React from 'react';
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts = () => {
    return (
        <div className="posts">
            <div className="posts_first">
                <div className="posts_first_img">
                    <img src="/images/profile.jpeg" alt="profile img" />
                </div>
                <div className="posts_first_name"><strong>Divya Raheja</strong> <FaRegCheckCircle className="verify" /></div>
                <div className="posts_first_username">
                    @divyaraheja <span>6m</span>
                </div>
            </div>
            <div className="posts_details">
                <div className="posts_details_msg">
                    This is my first post.Keep growing.
                </div>
                <div className="posts_details_img">
                    <img src="/images/post.jpg" alt="post" />
                </div>
                <div className="reactions">
                    <span>
                        <FaComment className="re" /> 45
                    </span>
                    <span>
                        <FaRegChartBar className="re" /> 4
                    </span>
                    <span>
                        <FaHeart className="re" /> 345
                    </span>
                    <span>
                        <FaLeaf className="re" /> 234
                    </span>
                </div>
            </div>
        </div>
        )
}
export default Posts;