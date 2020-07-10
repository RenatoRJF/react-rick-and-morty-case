import { GET_CHARACTERS } from "../queries";

export const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        name: "Rick",
      },
    },
    result: {
      data: {
        characters: {
          results: [...Array(2).keys()].map((character, i) => ({
            id: i + 1,
            name: "Rick",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            image: "http://imagelink.png",
            origin: {
              name: "Earth",
              dimension: "Dimension 322-F",
            },
          })),
        },
      },
    },
  },
];
