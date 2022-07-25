import { View, Pressable } from "react-native";
import FormikTextInput from "../Formik/FormikTextInput";
import Text from "../Text";
import theme from "../../theme";

const SignInForm = ({ handleSubmit }) => {
    return (
        <View>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput
                name='password'
                securityTextEntry
                placeholder='Password'
            />
            <Pressable onPress={handleSubmit} style={theme.buttonSection}>
                <Text style={theme.buttonText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;
