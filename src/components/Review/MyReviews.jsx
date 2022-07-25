import { FlatList, View } from "react-native";
import { useQuery } from "@apollo/client/react";
import { AUTHENTICATED_USER } from "../../graphql/queries";
import ReviewItem from "../Review/ReviewItem";

const MyReviews = () => {
    const { data, loading, refetch } = useQuery(AUTHENTICATED_USER, {
        variables: { includeReviews: true },
        fetchPolicy: "cache-and-network",
    });

    if (loading) return <View></View>;

    const reviews = data.me.reviews
        ? data.me.reviews.edges?.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            style={{ backgroundColor: "#CDCDCD" }}
            data={reviews}
            renderItem={({ item }) => (
                <ReviewItem
                    review={item}
                    key={item.id}
                    myReviews={true}
                    refetch={refetch}
                />
            )}
            keyExtractor={({ id }) => id}
        />
    );
};

export default MyReviews;
