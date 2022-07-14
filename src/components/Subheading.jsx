import Text from "./Text";
import { StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorAppBarTab: {
        color: theme.colors.appBarTab,
    },
});

const Subheading = ({ children, color }) => {
    const textStyle = [
        styles.text,
        color === "textSecondary" && styles.colorTextSecondary,
        color === "primary" && styles.colorPrimary,
        color === "appBarTab" && styles.colorAppBarTab,
    ];

    return <Text style={textStyle}>{children}</Text>;
};

export default Subheading;
