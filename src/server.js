const gameId = 'jiOQdQSqnkI7P92kwOuB';

const getScores = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();
  return data;
};

export const postScore = async (score) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    },
  );
  const data = await response.json();
  return data;
};

export default getScores;