import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();

  // Use URLSearchParams to extract query params
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query'); // 'react' in our example

  return (
    <div>
      \<h1>{queryParams}</h1>
      <h1>{queryParams.get("city")}</h1>
      <h2>Search Page</h2>
      <p>Search term: {searchTerm}</p>
    </div>
  );
}

export default SearchPage;
