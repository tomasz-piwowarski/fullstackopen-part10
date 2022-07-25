import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id) => {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, {
        variables: { id, first: 4 },
        fetchPolicy: "cache-and-network",
    });

    const handleFetchMore = () => {
        const canFetchMore =
            !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                id,
                first: 4,
            },
        });
    };

    return {
        reviews: data?.repository.reviews,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    };
};

export default useReviews;
