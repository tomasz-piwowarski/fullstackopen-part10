import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import ItemTopPart from "./ItemTopPart";
import ItemBottomPart from "./BottomItemPart";

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        backgroundColor: theme.colors.white,
    },
});

function kFormatter(num) {
    return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
}

const RepositoryItem = ({ repository }) => {
    let stargazersCount = kFormatter(repository.stargazersCount);
    let forksCount = kFormatter(repository.forksCount);
    return (
        <View style={styles.container}>
            <ItemTopPart
                {...{
                    ownerAvatarUrl: repository.ownerAvatarUrl,
                    description: repository.description,
                    language: repository.language,
                    fullName: repository.fullName,
                }}
            />
            <ItemBottomPart
                {...{
                    stargazersCount,
                    forksCount,
                    reviewCount: repository.reviewCount,
                    ratingAverage: repository.ratingAverage,
                }}
            />
        </View>
    );
};

export default RepositoryItem;
