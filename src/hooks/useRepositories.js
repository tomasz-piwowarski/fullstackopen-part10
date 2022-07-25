import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ selectedSort, searchKeyword }) => {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        variables: {
            orderBy:
                selectedSort === "CREATED_AT" ? "CREATED_AT" : "RATING_AVERAGE",
            orderDirection: selectedSort === "DESC" ? "DESC" : "ASC",
            searchKeyword,
            first: 4,
        },
        fetchPolicy: "cache-and-network",
    });
    const handleFetchMore = () => {
        const canFetchMore =
            !loading && data?.repositories.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                orderBy:
                    selectedSort === "CREATED_AT"
                        ? "CREATED_AT"
                        : "RATING_AVERAGE",
                orderDirection: selectedSort === "DESC" ? "DESC" : "ASC",
                searchKeyword,
                first: 4,
            },
        });
    };

    return {
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    };
};
export default useRepositories;
