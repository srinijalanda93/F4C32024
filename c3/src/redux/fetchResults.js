async function fetchData(dispatch) {
  try {
    console.log("fetching started");
    dispatch({ type: "LOADING", payload: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch({ type: "NOT_LOADING", payload: false });
    dispatch({ type: "FETCH_DATA", payload: data });
    console.log("fetching end");
  } catch (error) {
    console.error(error);
  }
}
export default fetchData;

// This is the final code
