function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return value
    } else {
      return number_value
    }
  }
  
  
  let element_button = document.getElementById('button');
  element_button.style.backgroundColor = '#000000';
  element_button.style.color = '#ffffff';
  
  
  document.getElementById('button').addEventListener('click', (event) => {
    event.target.innerText = getNumberOrString(document.getElementById('comment').value);
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('comment').value);
    new_li.style.color = '#000099';
  
    element_list.appendChild(new_li);
  
  });