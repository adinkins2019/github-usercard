/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const githubAPIString = "https://api.github.com/users/";
const cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/adinkins2019')
.then(response => {
  //console.log('Received data');
  //console.log(response.data);
  const myCard = cardCreator(response.data);
  //console.log(myCard.login, myCard.avatar_url);
  //const newCard = cardCreator(myCard);
  cards.appendChild(myCard);
})
.catch(error => {
console.log('An error occurred: '+ error);
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'nickdurbin', 'spettigrew',
'krboelter', 'clifhodges13', 'dlittle-525', 'ron-hughes', 'RobertRamosJr', 'smv5047', 'Sherexmykes', 'scottmm374',
'Jalba784', 'rupol', 'bobbidigi', 'nezlobnaya', 'raythurman2386', 'adamcpenman', 'LeonChisum', 'LoralieFlint', 'dannyotown', 'MystiDyse', 'dswhitely1', 'Jason-Aviles'];

console.log(followersArray);
followersArray.forEach(follower => {
  const fwDataURL = githubAPIString + follower;
  //console.log(fwDataURL);
  axios.get(fwDataURL)
  .then(response => {
   // console.log('Received data');
   // console.log(response.data);
    const fwCard = cardCreator(response.data);
    cards.appendChild(fwCard);
    }
  )
  .catch(error => {
    console.log('An error occurred: ' );
    console.log(error);
  })
}
)

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardCreator(cardObj){
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  
  const imageURL = document.createElement('img');
  imageURL.src = cardObj.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  
  const fullName = document.createElement('h3');
  fullName.classList.add('name');
  fullName.textContent = cardObj.name;

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = cardObj.login;

  const location = document.createElement('p');
  location.textContent = "Location: " + cardObj.location;

  const profile = document.createElement('p');
  profile.textContent = "Profile: ";
  const profileURL = document.createElement('a');
  profileURL.href = cardObj.html_url;
  profileURL.textContent = cardObj.html_url;
  profile.appendChild(profileURL);

  const followers = document.createElement('p');
  followers.textContent = "Followers: " + cardObj.followers;

  const following = document.createElement('p');
  following.textContent = "Following: " + cardObj.following;

  const bio = document.createElement('p');
  bio.textContent = cardObj.bio;

  cardInfo.appendChild(fullName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  cardDiv.appendChild(imageURL);
  cardDiv.appendChild(cardInfo);
  
  
  
 return cardDiv;
 
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
