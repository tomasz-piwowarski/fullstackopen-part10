import { View, StyleSheet, Pressable } from "react-native";
import FormikTextInput from "./Formik/FormikTextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: "white",
    },
    loginButtonSection: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginHorizontal: 15,
        marginVertical: 8,
        minWidth: 64,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: "white",
    },
});

const SignInForm = ({ handleSubmit }) => {
    return (
        <View>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput
                name='password'
                securityTextEntry
                placeholder='Password'
            />
            <View style={styles.loginButtonSection}>
                <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignInForm;
