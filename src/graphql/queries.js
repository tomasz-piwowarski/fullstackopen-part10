import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                cursor
                node {
                    id
                    ownerName
                    fullName
                    ratingAverage
                    reviewCount
                    stargazersCount
                    forksCount
                    description
                    language
                    ownerAvatarUrl
                }
            }
        }
    }
`;

export const AUTHENTICATED_USER = gql`
    query authenticatedUser {
        me {
            id
            username
        }
    }
`;
