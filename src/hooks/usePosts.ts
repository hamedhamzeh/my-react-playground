import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQUery {
    page: number;
    pageSize: number;
}

const usePosts = (query: PostQUery) => {
    const fetchPosts = () => {
        return axios
            .get<Post[]>("https://jsonplaceholder.typicode.com/Posts", {
                params: {
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
            .then((res) => res.data);
    };

    return useQuery<Post[], Error>({
        queryKey: ["Posts", query],
        queryFn: fetchPosts,
        staleTime: 60 * 1000, //1m
        keepPreviousData: true
    });
};

export default usePosts;
