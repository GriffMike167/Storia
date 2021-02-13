/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      image
      photographer
      description
      currentPrice
      specialPrice
      equipment
      props
      workExperince
      venuesWorked
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        photographer
        description
        currentPrice
        specialPrice
        equipment
        props
        workExperince
        venuesWorked
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
