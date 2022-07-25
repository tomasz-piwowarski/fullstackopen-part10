import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import SignUpForm from "./SignUpForm";
import * as yup from "yup";
import useSignUp from "../../hooks/useSignUp";
import { useNavigate } from "react-router-native";
import useSignIn from "../../hooks/useSignIn";
import { useApolloClient } from "@apollo/client";
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { useContext } from "react";

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords do not match")
        .required("Password confirmation is required"),
});

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: "white",
    },
});

export const SignUpContainer = ({ onSubmit }) => {
    const initialValues = {
        username: "",
        password: "",
        passwordConfirmation: "",
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <SignUpForm handleSubmit={handleSubmit} />
                )}
            </Formik>
        </View>
    );
};

const SignUp = () => {
    const [signUp] = useSignUp();
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async ({ username, password }) => {
        try {
            const { data } = await signUp({ username, password });
            if (data) {
                const { data } = await signIn({ username, password });
                await authStorage.setAccessToken(data.authenticate.accessToken);
                apolloClient.resetStore();
                navigate("/");
            }
        } catch (e) {
            console.log(e);
        }
    };

    return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
