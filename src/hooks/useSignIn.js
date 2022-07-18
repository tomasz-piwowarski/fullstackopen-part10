import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHENTICATE);
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const payload = await mutate({
            variables: { username, password },
        });

        if (payload.data && payload.data.authenticate) {
            authStorage.setAccessToken(payload.data.authenticate.accessToken);
            apolloClient.resetStore();
        }

        return payload;
    };
    return [signIn, result];
};

export default useSignIn;
