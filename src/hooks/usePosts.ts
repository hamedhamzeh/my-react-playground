import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const usePosts = (userId: number | undefined) => {
    const fetchPosts = () => {
        return axios
            .get<Post[]>("https://jsonplaceholder.typicode.com/Posts", {
                params: {
                    userId
                }
            })
            .then((res) => res.data);
    };

    return useQuery<Post[], Error>({
        queryKey: userId ? ["users", userId, "Posts"] : ["Posts"],
        queryFn: fetchPosts,
        staleTime: 60 * 1000 //1m
    });
};

export default usePosts;
