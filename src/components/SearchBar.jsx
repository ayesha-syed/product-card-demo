import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, X } from 'lucide-react';

const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  max-width: 400px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    border-color: #999;
  }
`;

const SearchButton = styled.button`
  padding: 10px 16px;
  background-color: #0066FF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  outline: none;
`;

const ClearButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultsContainer = styled.div`
  margin-top: 16px;
  max-width: 400px;
`;

const ResultItem = styled.div`
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  background: #f9f9f9;

  &:hover {
    background: #f0f0f0;
  }
`;

const ResultImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  display: inline-block;
  border-radius: 4px;
`;

const InfoText = styled.span`
  font-size: 12px;
  color: #888;
  margin-left: 8px;
`;

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const mockResults = [
    { id: 1, name: 'Wireless Headphones', image: 'https://via.placeholder.com/40?text=H' },
    { id: 2, name: 'USB Cable', image: 'https://via.placeholder.com/40?text=C' },
    { id: 3, name: 'Phone Case', image: 'https://via.placeholder.com/40?text=P' },
  ];

  const handleSearch = () => {
    if (query.trim()) {
      setResults(mockResults);
      setShowResults(true);
      onSearch?.(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  const handleResultClick = (result) => {
    setQuery(result.name);
    setShowResults(false);
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ color: '#CCCCCC' }}
        />

        <SearchButton onClick={handleSearch} style={{ outline: 'none' }}>
          <Search size={16} />
        </SearchButton>

        <ClearButton onClick={handleClear}>
          <X size={16} />
        </ClearButton>
      </SearchContainer>

      {showResults && (
        <ResultsContainer>
          {results.map((result) => (
            <ResultItem 
              key={result.id}
              onClick={() => handleResultClick(result)}
              role="button"
            >
              <ResultImage src={result.image} />
              <span>{result.name}</span>
              <InfoText>In stock</InfoText>
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </div>
  );
}

export default SearchBar;
