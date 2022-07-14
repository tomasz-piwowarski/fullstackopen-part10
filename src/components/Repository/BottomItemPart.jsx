import Text from "../Text";
import Subheading from "../Subheading";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    bottomParent: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
    },
    bottomChild: {
        alignItems: "center",
    },
});

const ItemBottomPart = ({
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
}) => {
    return (
        <View style={styles.bottomParent}>
            <View style={styles.bottomChild}>
                <Subheading>{stargazersCount}</Subheading>
                <Text color='textSecondary'>Stars</Text>
            </View>
            <View style={styles.bottomChild}>
                <Subheading>{forksCount}</Subheading>
                <Text color='textSecondary'>Forks</Text>
            </View>
            <View style={styles.bottomChild}>
                <Subheading>{reviewCount}</Subheading>
                <Text color='textSecondary'>Reviews</Text>
            </View>
            <View style={styles.bottomChild}>
                <Subheading>{ratingAverage}</Subheading>
                <Text color='textSecondary'>Ratings</Text>
            </View>
        </View>
    );
};

export default ItemBottomPart;
