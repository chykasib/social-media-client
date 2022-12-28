import React, { useState, useEffect } from 'react';

function Media() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/media');
            const data = await response.json();
            setPosts(data);
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-sm mx-auto mt-16">
            {posts.map((post) => (
                <div key={post.id} className="py-4 px-6 rounded-md shadow-lg">
                    <p className="text-xl font-bold">{post.text}</p>
                    <img src={post.imageUrl} alt={post.text} className="w-full mt-4" />
                </div>
            ))}
        </div>
    );
}

export default Media;