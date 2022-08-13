var flags;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


flags = ['Yemen🇾🇪', 'Scotland🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'UK🇬🇧'];


document.getElementById('button').addEventListener('click', (event) => {
  event.target.style.color = '#ffffff';
  event.target.style.backgroundColor = '#000000';
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = randomMember(flags);

  element_list.appendChild(new_li);

});

document.getElementById('Remove').addEventListener('click', (event) => {
  event.target.style.color = '#ffffff';
  event.target.style.backgroundColor = '#ff6666';
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();

});