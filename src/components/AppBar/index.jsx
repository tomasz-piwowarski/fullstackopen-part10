import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import { Link } from "react-router-native";
import { useQuery } from "@apollo/client";
import { AUTHENTICATED_USER } from "../../graphql/queries";
import { useContext } from "react";
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight * 1.8,
        paddingBottom: Constants.statusBarHeight,
        paddingLeft: 10,
        backgroundColor: theme.colors.textPrimary,
        flexDirection: "row",
    },
    tab: {
        marginHorizontal: 5,
    },
});

const AppBar = () => {
    const navigate = useNavigate();
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    const { data } = useQuery(AUTHENTICATED_USER, {
        fetchPolicy: "cache-and-network",
    });

    const handleSignOut = async () => {
        authStorage.removeAccessToken();
        apolloClient.resetStore();
        navigate("/");
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link style={styles.tab} to='/'>
                    <AppBarTab text='Repositories' color='appBarTab' />
                </Link>
                {!data?.me ? (
                    <>
                        <Link style={styles.tab} to='/signin'>
                            <AppBarTab text='Sign In' color='appBarTab' />
                        </Link>
                        <Link style={styles.tab} to='/signup'>
                            <AppBarTab text='Sign Up' color='appBarTab' />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link style={styles.tab} to='/createreview'>
                            <AppBarTab text='Create Review' color='appBarTab' />
                        </Link>
                        <Link style={styles.tab} to='/myreviews'>
                            <AppBarTab text='My Reviews' color='appBarTab' />
                        </Link>
                        <Pressable onPress={handleSignOut}>
                            <AppBarTab text='Sign Out' color='appBarTab' />
                        </Pressable>
                    </>
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;
