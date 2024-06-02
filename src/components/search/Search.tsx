import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('Search must be used within a SearchProvider');
  }

  const { searchTerm, setSearchTerm, products } = context;
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Suggestion logic here
    if (e.target.value.length > 0) {
      const categories = [...new Set(products.map(product => product.category))];
      setSuggestions(categories.filter(category => category.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = () => {
    navigate('/search');
  };

  const handleSuggestionClick = (category: string) => {
    setSearchTerm(category);
    navigate('/search');
  };

  return (
    <div className="search-container">
      <input
      className='sserch'
        type="text"
        placeholder="Search for anything"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className='btn-se' onClick={handleSearchSubmit}>Search</button>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
