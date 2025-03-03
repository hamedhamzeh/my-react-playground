import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQUery {
    pageSize: number;
}

const usePosts = (query: PostQUery) => {
    return useInfiniteQuery<Post[], Error>({
        queryKey: ["Posts", query],
        queryFn: ({ pageParam = 1 }) =>
            axios
                .get<Post[]>("https://jsonplaceholder.typicode.com/Posts", {
                    params: {
                        _start: (pageParam - 1) * query.pageSize,
                        _limit: query.pageSize
                    }
                })
                .then((res) => res.data),
        staleTime: 60 * 1000, //1m
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        }
    });
};

export default usePosts;
