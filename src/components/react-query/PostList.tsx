import { useState } from "react";
import usePosts from "../other/hooks/usePosts";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

const PostList = () => {
    const pageSize = 10;

    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({ pageSize });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <ul className="list-group">
                {data.pages.map((page) => (
                    <React.Fragment>
                        {page.map((post) => (
                            <li key={post.id} className="list-group-item">
                                {post.title}
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>
            <div className="my-3">
                <button className="btn btn-primary ms-2" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "LoadMore"}
                </button>
            </div>
        </>
    );
};

export default PostList;
