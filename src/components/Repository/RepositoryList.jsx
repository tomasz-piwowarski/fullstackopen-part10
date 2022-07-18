import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CDCDCD",
    },
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repositories } = useRepositories();
    const repositoryNodes = repositories
        ? repositories.edges?.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            style={styles.container}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <RepositoryItem key={item.id} repository={item} />
            )}
        />
    );
};

export default RepositoryList;
