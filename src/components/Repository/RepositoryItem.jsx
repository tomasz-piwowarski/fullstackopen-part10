import { StyleSheet, View, Pressable } from "react-native";
import theme from "../../theme";
import ItemTopPart from "./ItemTopPart";
import ItemBottomPart from "./BottomItemPart";
import Text from "../Text";
import * as Linking from "expo-linking";

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

const RepositoryItem = ({ repository, single }) => {
    let stargazersCount = kFormatter(repository.stargazersCount);
    let forksCount = kFormatter(repository.forksCount);

    return (
        <View style={styles.container} testID='repositoryItem'>
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
            {single ? (
                <View style={theme.buttonSection}>
                    <Pressable
                        onPress={() => {
                            Linking.openURL(repository.url);
                        }}
                    >
                        <Text style={theme.buttonText}>Open in GitHub</Text>
                    </Pressable>
                </View>
            ) : null}
        </View>
    );
};

export default RepositoryItem;
