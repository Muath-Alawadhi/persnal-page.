

var links, item;


links = ['https://www.amazon.co.uk/', 'https://www.ebay.co.uk/', 'https://www.aliexpress.com/'];
item = ['Amazon', 'Ebay', 'Aliexpress'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!item.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    item.forEach((item) => {
      new_a.setAttribute("href", links.shift());
    });
    new_a.innerText = item.shift();

    new_li.appendChild(new_a);

    element_list.appendChild(new_li);
  }

});