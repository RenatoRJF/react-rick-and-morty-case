import { gql } from "apollo-boost";

const charactersData = `
  id
  name
  status
  species
  type
  gender
  image
  origin {
    name
    dimension
  }
`;

export const GET_EPISODES = gql`
  query($page: Int!, $filter: FilterEpisode!) {
    episodes(page: $page, filter: $filter) {
      results {
        id
        name
        characters {
          ${charactersData}
        }
      }
    }
  }
`;

export const GET_CHARACTERS = gql`
  query($page: Int!, $filter: FilterCharacter!) {
    characters(page: $page, filter: $filter) {
      results {
        ${charactersData}
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query($filter: FilterLocation!) {
    locations(filter: $filter) {
      results {
        residents {
          ${charactersData}
        }
      }
    }
  }
`;
