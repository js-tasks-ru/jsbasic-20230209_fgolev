function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  for (let key of friends) {
    ul.insertAdjacentHTML('beforeEnd', `<li>${key.firstName} ${key.lastName}</li>`);}
  return ul;
}
