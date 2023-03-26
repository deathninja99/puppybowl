// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2301-ftb-et-web-am";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  let request = await fetch(`${APIURL}players`);
  let result = await request.json();
  console.log(result);
  return result;
};

export const fetchSinglePlayer = async (playerId) => {
  let request = await fetch(`${APIURL}players/${playerId}`);
  let result = await request.json();
  console.log(result);
  return result;
};

export const addNewPlayer = async (playerObj) => {
  try {
   let name = document.getElementById('name');
   let breed = document.getElementById('breed')
   let postings = await fetch(
    `${APIURL}players`)
    method: 'POST'{

      body: json.stringify({
        name: name
        breed: breed
      })
  } catch (error) {
    console.log(error)
  }
  }
};

export const removePlayer = async (playerId) => {};
