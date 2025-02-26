import { useState } from "react";
import usePosts from "../../hooks/usePosts";

const PostList = () => {
    const pageSize = 20;
    const [page, setPage] = useState(1);
    const [userId, setUserId] = useState<number>();

    const { data: posts, error, isLoading } = usePosts({ page, pageSize });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            {/* <select
                value={userId}
                onChange={(event) => setUserId(parseInt(event.target.value))}
                className="form-select mb-3"
            >
                <option value=""></option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select> */}
            <ul className="list-group">
                {posts?.map((post) => (
                    <li key={post.id} className="list-group-item">
                        {post.title}
                    </li>
                ))}
            </ul>
            <div className="my-3">
                <button disabled={page === 1} className="btn btn-primary" onClick={() => setPage(page - 1)}>
                    Previous
                </button>
                <button className="btn btn-primary ms-2" onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </div>
        </>
    );
};

export default PostList;
