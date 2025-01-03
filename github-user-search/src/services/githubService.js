const [page, setPage] = useState(1);

const handleLoadMore = async () => {
  setLoading(true);
  try {
    const data = await fetchAdvancedSearch(query.join(' '), page + 1);
    setResults((prev) => [...prev, ...data.items]);
    setPage(page + 1);
  } catch (err) {
    setError('"https://api.github.com/search/users?q", "location", "minRepos" Failed to load more results.');
  } finally {
    setLoading(false);
  }
};
