import { StyleSheet, View } from "react-native";
import RepositoryList from "./Repository/RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import SingleRepository from "./Repository/SingleRepository";
import CreateReview from "./Review/CreateReview";
import SignUp from "./SignUp";
import MyReviews from "./Review/MyReviews";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} exact />
                <Route path='/signin' element={<SignIn />} exact />
                <Route path='*' element={<Navigate to='/' replace />} />
                <Route path='/:id' element={<SingleRepository />} exact />
                <Route path='/createreview' element={<CreateReview />} exact />
                <Route path='/signup' element={<SignUp />} exact />
                <Route path='/myreviews' element={<MyReviews />} exact />
            </Routes>
        </View>
    );
};

export default Main;
