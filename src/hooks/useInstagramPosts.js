import { useState, useEffect } from 'react';

export const useInstagramPosts = (limit = 6) => {
    const [instagramPosts, setInstagramPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            const token = import.meta.env.VITE_INSTAGRAM_TOKEN;

            if (!token) {
                setLoading(false);
                return; // Fallback to local data is handled by component
            }

            try {
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${token}`
                );

                if (!response.ok) throw new Error('Failed to fetch Instagram posts');

                const data = await response.json();

                if (data.data) {
                    const formattedPosts = data.data.slice(0, limit).map((post, i) => ({
                        id: post.id,
                        url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
                        alt: post.caption ? post.caption.substring(0, 40) : `Instagram post ${i + 1}`,
                        link: post.permalink
                    }));
                    setInstagramPosts(formattedPosts);
                } else {
                    setError('No data returned from Instagram API.');
                }
            } catch (err) {
                console.error("Error fetching Instagram posts:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, [limit]);

    return { instagramPosts, loading, error };
};
