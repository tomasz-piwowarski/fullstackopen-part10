import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
    mutation authenticate($username: String!, $password: String!) {
        authenticate(
            credentials: { username: $username, password: $password }
        ) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createReview(
        $ownerName: String!
        $repositoryName: String!
        $rating: Int!
        $text: String
    ) {
        createReview(
            review: {
                ownerName: $ownerName
                repositoryName: $repositoryName
                rating: $rating
                text: $text
            }
        ) {
            repositoryId
        }
    }
`;

export const SIGN_UP = gql`
    mutation createUser($username: String!, $password: String!) {
        createUser(user: { username: $username, password: $password }) {
            id
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation DeleteReview($deleteReviewId: ID!) {
        deleteReview(id: $deleteReviewId)
    }
`;
