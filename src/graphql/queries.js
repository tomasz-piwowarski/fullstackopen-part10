import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query repositories(
        $after: String
        $first: Int
        $orderDirection: OrderDirection
        $orderBy: AllRepositoriesOrderBy
        $searchKeyword: String
        $ownerName: String
    ) {
        repositories(
            after: $after
            first: $first
            orderDirection: $orderDirection
            orderBy: $orderBy
            searchKeyword: $searchKeyword
            ownerName: $ownerName
        ) {
            edges {
                node {
                    createdAt
                    description
                    forksCount
                    fullName
                    id
                    language
                    name
                    ownerAvatarUrl
                    ownerName
                    ratingAverage
                    reviewCount
                    stargazersCount
                }
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query GetRepository($id: ID!) {
        repository(id: $id) {
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
            url
        }
    }
`;

export const GET_REVIEWS = gql`
    query repository($id: ID!, $after: String, $first: Int) {
        repository(id: $id) {
            id
            fullName
            reviews(after: $after, first: $first) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
`;

export const AUTHENTICATED_USER = gql`
    query authenticatedUser($includeReviews: Boolean = true) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                        repository {
                            fullName
                            id
                        }
                    }
                    cursor
                }
            }
        }
    }
`;
