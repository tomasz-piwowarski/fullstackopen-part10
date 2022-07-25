import { View, Pressable } from "react-native";
import FormikTextInput from "../Formik/FormikTextInput";
import Text from "../Text";
import theme from "../../theme";

const CreateReviewForm = ({ handleSubmit }) => {
    return (
        <View>
            <FormikTextInput
                name='ownerName'
                placeholder="Repository owner's GitHub username"
            />
            <FormikTextInput
                name='repositoryName'
                placeholder="Repository's name"
            />
            <FormikTextInput name='rating' placeholder='Rating 0-100' />
            <FormikTextInput name='text' placeholder='Review' multiline />
            <Pressable onPress={handleSubmit} style={theme.buttonSection}>
                <Text style={theme.buttonText}>Create review</Text>
            </Pressable>
        </View>
    );
};

export default CreateReviewForm;
