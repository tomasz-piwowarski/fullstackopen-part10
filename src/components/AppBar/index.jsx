import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import { Link } from "react-router-native";

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
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link style={{ marginLeft: 5, marginRight: 5 }} to='/'>
                    <AppBarTab text='Repository' color='appBarTab' />
                </Link>
                <Link style={{ marginLeft: 5, marginRight: 5 }} to='/signin'>
                    <AppBarTab text='Sign In' color='appBarTab' />
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;
