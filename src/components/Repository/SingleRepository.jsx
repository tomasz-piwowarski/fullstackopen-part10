import { FlatList, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "../Text";
import useReviews from "../../hooks/useReviews";
import ReviewItem from "../Review/ReviewItem";

const RepositoryInfo = ({ repository }) => {
    return <RepositoryItem repository={repository} single={true} />;
};

const SingleRepository = () => {
    const { id } = useParams();
    const { repository, loading } = useRepository(id);
    const { reviews, fetchMore } = useReviews(id);

    const onEndReach = () => {
        console.log("XD");
        fetchMore();
    };

    const data = reviews ? reviews.edges?.map((edge) => edge.node) : [];

    if (loading)
        return (
            <View>
                <Text>Waiting</Text>
            </View>
        );

    return (
        <FlatList
            style={{ backgroundColor: "#CDCDCD" }}
            data={data}
            renderItem={({ item }) => (
                <ReviewItem review={item} key={item.id} />
            )}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => (
                <RepositoryInfo repository={repository.repository} />
            )}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    );
};

export default SingleRepository;
