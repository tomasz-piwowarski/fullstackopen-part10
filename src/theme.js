import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: "#24292e",
        textSecondary: "#586069",
        appBarTab: "#ededed",
        primary: "#0366d6",
        white: "white",
        error: "#d73a4a",
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: "Roboto",
            ios: "Arial",
            default: "System",
        }),
    },
    fontWeights: {
        normal: "400",
        bold: "700",
    },
    buttonSection: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 15,
        marginVertical: 8,
        minWidth: 64,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0366d6",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: "white",
    },
};

export default theme;
