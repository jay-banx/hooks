import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";

const getPlanet = (id) => {
  return fetch(`https://swapi.co/api/planets/${id}/`)
    .then((res) => res.json())
    .then((data) => data);
};

const useRequest = (request) => {
  const initialState = useMemo(
    () => ({
      data: null,
      loading: true,
      error: null,
    }),
    []
  );

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState);
    let cancelled = false;
    request()
      .then(
        (data) =>
          !cancelled &&
          setDataState({
            data,
            loading: false,
            error: null,
          })
      )
      .catch(
        (error) =>
          !cancelled &&
          setDataState({
            data: null,
            loading: false,
            error,
          })
      );
    return () => (cancelled = true);
  }, [request, initialState]);

  return dataState;
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);
  return useRequest(request);
};

const PlanetInfo = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id);

  if (error) {
    return <div>Something is wrong</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {id} - {data && data.name}
    </div>
  );
};

const App = () => {
  const [id, setId] = useState(1);
  const onPlus = () => {
    setId((id) => id + 1);
  };

  return (
    <div>
      <button onClick={onPlus}>+</button>
      <PlanetInfo id={id} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
