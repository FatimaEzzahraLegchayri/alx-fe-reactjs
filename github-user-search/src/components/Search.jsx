import React, { useState } from 'react';
import { fetchAdvancedSearch } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);

    try {
      const data = await fetchAdvancedSearch(query.join(' '));
      setResults(data.items || []);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub Advanced User Search</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm font-medium">Username</label>
          <input
            type="text"
            id="username"
            className="p-2 border rounded"
            placeholder="GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="location" className="text-sm font-medium">Location</label>
          <input
            type="text"
            id="location"
            className="p-2 border rounded"
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="minRepos" className="text-sm font-medium">Minimum Repositories</label>
          <input
            type="number"
            id="minRepos"
            className="p-2 border rounded"
            placeholder="Minimum number of repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="border rounded p-4 flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              <p>Location: {user.location || 'Not available'}</p>
              <p>Repos: {user.public_repos || 'Unknown'}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View  fetchUserData
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
