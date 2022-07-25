import { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import TextInput from "../Formik/TextInput";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CDCDCD",
        marginBottom: 100,
    },
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
    repositories,
    setSelectedSort,
    selectedSort,
    setSearchKeyword,
    onEndReach,
}) => {
    const navigate = useNavigate();
    const repositoryNodes = repositories
        ? repositories.edges?.map((edge) => edge.node)
        : [];

    return (
        <View>
            <FlatList
                ListHeaderComponent={
                    <>
                        <TextInput onChangeText={setSearchKeyword} />
                        <Picker
                            selectedValue={selectedSort}
                            onValueChange={(itemValue) =>
                                setSelectedSort(itemValue)
                            }
                        >
                            <Picker.Item
                                label='Latest repositories'
                                value='CREATED_AT'
                            />
                            <Picker.Item
                                label='Highest rated repositories'
                                value='DESC'
                            />
                            <Picker.Item
                                label='Lowest rated repositories'
                                value='ASC'
                            />
                        </Picker>
                    </>
                }
                style={styles.container}
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            navigate(`/${item.id}`);
                        }}
                    >
                        <RepositoryItem
                            key={item.id}
                            repository={item}
                            single={false}
                        />
                    </Pressable>
                )}
            />
        </View>
    );
};

const RepositoryList = () => {
    const [selectedSort, setSelectedSort] = useState("CREATED_AT");
    const [keyword, setSearchKeyword] = useState("");
    const [searchKeyword] = useDebounce(keyword, 500);
    const { repositories, fetchMore } = useRepositories({
        selectedSort,
        searchKeyword,
    });
    const onEndReach = () => {
        fetchMore();
    };

    return (
        <RepositoryListContainer
            {...{
                repositories,
                setSelectedSort,
                selectedSort,
                setSearchKeyword,
                onEndReach,
            }}
        />
    );
};

export default RepositoryList;
