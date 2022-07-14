import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    textInput: {
        marginHorizontal: 15,
        marginVertical: 8,
        padding: 10,
        borderColor: theme.colors.textSecondary,
        borderWidth: 1,
        borderRadius: 5,
        color: theme.colors.textPrimary,
    },
    error: {
        borderColor: theme.colors.error,
    },
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [styles.textInput, error && styles.error, style];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
