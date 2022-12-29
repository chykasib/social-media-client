import React, { useState, useEffect, useContext } from 'react'
import { FaHeart, FaComment } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Shared/Loading/Loading';

const PostCard = () => {
    const { loading } = useContext(AuthContext);
    const [posts, setPosts] = useState([])
    const [showCards, setShowCards] = useState(false)

    useEffect(() => {
        fetch('https://social-media-server-pearl.vercel.app/PostData')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
        setTimeout(() => {
            setShowCards(true)
        }, 500)
    }, [])
    const handleLike = postId => {
        const like = document.querySelector(`#comment-${postId}`).value
        fetch(`https://social-media-server-pearl.vercel.app/PostData/${postId}/like`, {
            method: 'POST',
            body: JSON.stringify({ like }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }

    const handleComment = postId => {
        const comment = document.querySelector(`#comment-${postId}`).value
        fetch(`/api/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }

    const handleCommentSubmit = postId => {
        const comment = document.querySelector(`#comment-${postId}`).value
        fetch(`https://social-media-server-pearl.vercel.app/PostData/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            console.log(response)
        })
    }

    const cardSpring = useSpring({
        from: { transform: 'translateY(-50px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        delay: showCards ? 500 : 0
    })
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="my-20">
            <h1 className='text-5xl font-bold text-success text-center my-20'>Show Posts Area</h1>
            <div className="sm:flex md:flex-wrap lg:justify-evenly my-30">
                {posts?.map(post => (
                    <animated.div key={post._id} style={cardSpring}>
                        <div className="md:w-full lg:w-full px-4 py-4 rounded-lg shadow-lg bg-white justify-center mt-40">
                            <img src={post.image} alt='' className="w-full mb-4" />
                            <h2 className="text-lg font-bold mb-4 text-gray-700">{post.text}</h2>
                            <div className="flex items-center mb-4">
                                <FaHeart onClick={() => handleLike(post._id)} className="mr-4 text-red-500 cursor-pointer" />
                                <span className="mr-4 text-gray-700">{post.likes} likes</span>
                                <FaComment onClick={() => handleComment(post._id)} className="text-gray-700 cursor-pointer" />
                            </div>
                            {post?.comments?.map(comment => (
                                <div key={comment._id} className="mb-2 text-gray-700">
                                    {comment.text}
                                </div>
                            ))}
                            <form onSubmit={() => handleCommentSubmit(post._id)}>
                                <input
                                    type="text"
                                    id={`comment-${post._id}`}
                                    className="w-full px-2 py-1 rounded-full outline-none focus:shadow-outline"
                                    placeholder="Add a comment"
                                />
                            </form>
                        </div>
                    </animated.div>
                ))}
            </div>

        </div>
    )
}

export default PostCard;
