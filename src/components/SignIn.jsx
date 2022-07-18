import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import SignInForm from "./SignInForm";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useContext } from "react";
import { useApolloClient } from "@apollo/client";

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
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const [signIn] = useSignIn();
    const navigate = useNavigate();
    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = async ({ username, password }) => {
        try {
            const { data } = await signIn({ username, password });
            await authStorage.setAccessToken(data.authenticate.accessToken);
            apolloClient.resetStore();
            navigate("/");
        } catch (e) {
            console.log(e);
        }
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
