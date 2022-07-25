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
            <FormikTextInput
                name='passwordConfirmation'
                securityTextEntry
                placeholder='Password confirmation'
            />
            <Pressable onPress={handleSubmit} style={theme.buttonSection}>
                <Text style={theme.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;
