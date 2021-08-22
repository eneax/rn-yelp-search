import React from "react";

import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "berlin",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when component is first rendered
  React.useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errorMessage];
};
