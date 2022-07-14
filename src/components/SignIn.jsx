import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import SignInForm from "./SignInForm";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: "white",
    },
});

const SignIn = () => {
    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = ({ username, password }) => {
        console.log(username, password);
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <SignInForm handleSubmit={handleSubmit} />
                )}
            </Formik>
        </View>
    );
};

export default SignIn;
