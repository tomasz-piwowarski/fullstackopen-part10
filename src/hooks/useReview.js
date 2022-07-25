import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useReview = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({
        ownerName,
        repositoryName,
        rating,
        text,
    }) => {
        const auth = authStorage.getAccessToken();
        if (!auth) return;
        const payload = await mutate({
            variables: {
                ownerName,
                repositoryName,
                rating: Number(rating),
                text,
            },
        });

        return payload;
    };
    return [createReview, result];
};

export default useReview;
