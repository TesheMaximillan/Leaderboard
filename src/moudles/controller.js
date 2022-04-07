const gameId = 'Zl4d7IVkemOTTVg2fUdzz'; //
const baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const gameScore = { user: '', score: 0 };

// /////////////////// Post request
async function postData(data = {}) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

// /////////////////// Get request
async function getData() {
  const response = await fetch(baseUrl);
  return response.json();
}

export { gameScore, postData, getData };