import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useReview from "../../hooks/useReview";
import CreateReviewForm from "./CreateReviewForm";

const validationSchema = yup.object().shape({
    ownerName: yup.string().required("Owner's username is required"),
    repositoryName: yup.string().required("Password is required"),
    rating: yup
        .number()
        .typeError("you must specify a number")
        .required("Rating is required")
        .min(1, "Please give a number between 1 and 100")
        .max(100, "please give number between 1 and 100"),
    text: yup.string(),
});

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        backgroundColor: "white",
    },
});

const CreateReview = () => {
    const navigate = useNavigate();
    const [createReview] = useReview();
    const initialValues = {
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "",
    };

    const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
        try {
            const result = await createReview({
                ownerName,
                repositoryName,
                rating,
                text,
            });
            if (result.data) {
                navigate(`/${result.data.createReview.repositoryId}`);
            }
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
                    <CreateReviewForm handleSubmit={handleSubmit} />
                )}
            </Formik>
        </View>
    );
};

export default CreateReview;
