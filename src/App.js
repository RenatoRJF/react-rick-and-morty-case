import React, { useEffect, useCallback, useState, useRef } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from "./graphql/queries";
import GlobalStyles from "./styles/global";
import { COLORS } from "./styles/variables";

import Character from "./components/Character";
import Search from "./components/Search";

const Container = styled.div({
  width: "100%",
  height: "100%",
  margin: "auto",
  maxWidth: 1200,
  backgroundColor: COLORS.darkOpacity,
  paddingTop: 20,
});

const Header = styled.header`
  margin: auto;
  margin-bottom: 20px;
  max-width: 90%;

  @media screen and (min-width: 768px) {
    max-width: 800px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 350px;
  max-width: 350px;
  margin: 0 auto;

  @media screen and (min-width: 678px) {
    max-width: 700px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;

function App() {
  let searchBy = useRef("characters");
  const [filter, selectFilter] = useState("");
  const [characters, setCharacters] = useState(null);
  const [getCharacters, { data, error: charactersError }] = useLazyQuery(
    GET_CHARACTERS
  );
  const [
    getEpisodes,
    { data: episodesData, error: episodesError },
  ] = useLazyQuery(GET_EPISODES);
  const [
    filterByLocation,
    { data: lodationData, error: locationError },
  ] = useLazyQuery(GET_LOCATIONS);

  useEffect(() => {
    if (!characters && !filter) {
      getCharacters({ variables: { page: 1, filter: { name: "" } } });
    }

    if (data && !charactersError) {
      setCharacters(data.characters.results);
      return;
    }

    if (episodesData && !episodesError) {
      setCharacters(episodesData.episodes.results[0].characters);
      return;
    }

    if (lodationData && !locationError) {
      setCharacters(lodationData.locations.results[0].residents);
      return;
    }
  }, [
    filter,
    characters,
    data,
    episodesData,
    getCharacters,
    getEpisodes,
    episodesError,
    lodationData,
    charactersError,
    locationError,
  ]);

  useEffect(
    function handleNotFound() {
      if (charactersError?.graphQLErrors && searchBy.current === "characters") {
        const { message } = charactersError?.graphQLErrors[0];

        if (message.includes("404")) {
          searchBy.current = "locations";
          getEpisodes({ variables: { page: 1, filter: { name: filter } } });
          return;
        }
      }

      if (
        episodesError?.graphQLErrors &&
        (searchBy.current === "locations" || searchBy.current === "dimentions")
      ) {
        const { message } = episodesError?.graphQLErrors[0];

        if (message.includes("404")) {
          let filterQuery = { dimension: filter };

          if (searchBy.current === "locations") {
            searchBy.current = "dimentions";
            filterQuery = { name: filter };
          } else {
            searchBy.current = "";
          }

          filterByLocation({ variables: { filter: filterQuery } });
        }
        return;
      }

      setCharacters(null);
    },
    [
      charactersError,
      episodesError,
      filter,
      filterByLocation,
      getEpisodes,
      locationError,
    ]
  );

  const handleSearch = useCallback(
    (value) => {
      selectFilter(value);

      if (value) {
        searchBy.current = "characters";
        getCharacters({ variables: { page: 1, filter: { name: value } } });
        return;
      }

      setCharacters(null);
    },
    [getCharacters]
  );

  return (
    <Container>
      <GlobalStyles />

      <Header>
        <Search onSearch={handleSearch} />
      </Header>

      <Content>
        {Array.isArray(characters) &&
          characters.map((character) => (
            <Character data={character} key={character.id} />
          ))}
      </Content>
    </Container>
  );
}

export default App;
