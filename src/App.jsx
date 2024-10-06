import "./App.css";
import AutoComplete from "./components/AutoComplete";

function App() {
  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };

  return (
    <div className="auto__complete">
      <h1>Autocomplte / Typehead</h1>
      <AutoComplete
        placeholder={"Enter Recipe"}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={<>Loading Recipies.......</>}
        onSelect={(res) => {
          console.log(res);
        }}
        onChange={(input) => {}}
        onBlur={() => {}}
        onFocus={() => {}}
        customStyles={{}}
      />
    </div>
  );
}

export default App;
