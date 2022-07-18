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
        paddingLeft: 15,
        backgroundColor: theme.colors.textPrimary,
        flexDirection: "row",
    },
    // ...
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

    console.log(data);
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link style={{ marginLeft: 5, marginRight: 5 }} to='/'>
                    <AppBarTab text='Repository' color='appBarTab' />
                </Link>
                {!data?.me ? (
                    <Link
                        style={{ marginLeft: 5, marginRight: 5 }}
                        to='/signin'
                    >
                        <AppBarTab text='Sign In' color='appBarTab' />
                    </Link>
                ) : (
                    <Pressable onPress={handleSignOut}>
                        <AppBarTab text='Sign Out' color='appBarTab' />
                    </Pressable>
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;
