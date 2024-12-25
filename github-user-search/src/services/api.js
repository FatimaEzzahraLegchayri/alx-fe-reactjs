import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`, // Add only if key is required
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
