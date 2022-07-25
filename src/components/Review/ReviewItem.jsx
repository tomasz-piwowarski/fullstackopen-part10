import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Text from "../Text";
import Subheading from "../Subheading";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        backgroundColor: theme.colors.white,
        flexDirection: "column",
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    child: {
        flexDirection: "column",
        flexGrow: 1,
        flexShrink: 1,
    },
    ratingContainer: {
        flexGrow: 0,
        marginRight: 8,
        width: 40,
        height: 40,
        borderStyle: "solid",
        borderRadius: 20,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    dataContainer: {
        flexDirection: "row",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    button: {
        marginHorizontal: 10,
        padding: 10,
    },
});

const ReviewItem = ({ review, myReviews, refetch }) => {
    const [deleteReview] = useMutation(DELETE_REVIEW);
    console.log(review.id);
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: async () => {
                        await deleteReview({
                            variables: { deleteReviewId: review.id },
                        });
                        refetch();
                    },
                },
            ]
        );
    const navigate = useNavigate();
    const date = new Date(review.createdAt)
        .toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })
        .replace(/\//g, ".");
    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <View style={styles.ratingContainer}>
                    <Text color='primary'>{review.rating}</Text>
                </View>
                <View style={styles.child}>
                    <Subheading>
                        {myReviews
                            ? review.repository.fullName
                            : review.user.username}
                    </Subheading>
                    <Text color='textSecondary'>{date}</Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
            {myReviews ? (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={{
                            ...styles.button,
                            backgroundColor: theme.colors.primary,
                        }}
                        onPress={() => navigate(`/${review.repository.id}`)}
                    >
                        <Text color='white'>View Repository</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            ...styles.button,
                            backgroundColor: theme.colors.error,
                        }}
                        onPress={createTwoButtonAlert}
                    >
                        <Text color='white'>Delete Review</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    );
};

export default ReviewItem;
