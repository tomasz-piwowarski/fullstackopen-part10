import Text from "../Text";
import Subheading from "../Subheading";
import { Image, StyleSheet, View } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    language: {
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: theme.colors.primary,
        marginBottom: 3,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
    },
    topParent: {
        flexDirection: "row",
        padding: 10,
    },
    topChilds: {
        flexDirection: "column",
        paddingLeft: 15,
        paddingRight: 30,
    },
    topChild: {
        flexShrink: 1,
        flexDirection: "row",
        marginBottom: 3,
    },
});

const ItemTopPart = ({ ownerAvatarUrl, fullName, description, language }) => {
    return (
        <View style={styles.topParent}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            <View style={styles.topChilds}>
                <View style={styles.topChild}>
                    <Subheading style={{ flexShrink: 1 }}>
                        {fullName}
                    </Subheading>
                </View>
                <View style={styles.topChild}>
                    <Text style={{ flexShrink: 1 }} color='textSecondary'>
                        {description}
                    </Text>
                </View>
                <View style={styles.language}>
                    <Text color='white'>{language}</Text>
                </View>
            </View>
        </View>
    );
};

export default ItemTopPart;
