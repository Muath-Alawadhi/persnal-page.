alert("good to see you again")

var photos, pages, colors, page2, page3;


photos = ['https://notionpress.com/blog/wp-content/uploads/2021/06/NP-blog.jpeg', 'https://assets.americanliterature.com/al/images/story/jack-and-the-beanstalk-fee-fi-fo-fum.jpg', 'https://www.storynory.com/wp-content/uploads/2008/07/jack-house.800.jpg?ezimgfmt=rs:565x454/rscb6/ng:webp/ngcb6'];
pages = ['While he was eating, the giant came home. The giant was very big and looked very fearsome. Jack was terrified and went and hid inside. The giant cried, “Fee-fi-fo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I’ll grind his bones to make my bread!” The wife said, “There is no boy in here!” So, the giant ate his food and then went to his room. He took out his sacks of gold coins, counted them and kept them aside. Then he went to sleep. In the night, Jack crept out of his hiding place, took one sack of gold coins and climbed down the beanstalk. At home, he gave the coins to his mother. His mother was very happy and they lived well for sometime. Climbed the beanstalk and went to the giant’s house again. Once again, Jack asked the giant’s wife for food, but while he was eating the giant returned. Jack leapt up in fright and went and hid under the bed. The giant cried, “Fee-fifo-fum, I smell the blood of an Englishman. Be he alive, or be he dead, I’ll grind his bones to make my bread!” The wife said, “There is no boy in here!” The giant ate his food and went to his room. There, he took out a hen. He shouted, “Lay!” and the hen laid a golden egg. When the giant fell asleep, Jack took the hen and climbed down the beanstalk. Jack’s mother was very happy with him.', 'Once upon a time there lived a poor widow and her son Jack. One day, Jack’s mother told him to sell their only cow. Jack went to the market and on the way he met a man who wanted to buy his cow. Jack asked, “What will you give me in return for my cow?” The man answered, “I will give you five magic beans!” Jack took the magic beans and gave the man the cow. But when he reached home, Jack’s mother was very angry. She said, “You fool! He took away your cow and gave you some beans!” She threw the beans out of the window. Jack was very sad and went to sleep without dinner.  The next day, when Jack woke up in the morning and looked out of the window, he saw that a huge beanstalk had grown from his magic beans! He climbed up the beanstalk and reached a kingdom in the sky. There lived a giant and his wife. Jack went inside the house and found the giant’s wife in the kitchen. Jack said, “Could you please give me something to eat? I am so hungry!” The kind wife gave him bread and some milk.', 'Right,” said Jack, and handed him over Milky-White, then pocketed the beans.  Back home goes Jack and says to his mother, “You’ll never guess mother what I got for Milky-White.”  His mother became very excited, “Five pounds? Ten? Fifteen? No, it can’t be twenty.”  “I told you that you couldn’t guess. What do you say to these beans? They’re magical. Plant them overnight and — ”  “What!” Exclaimed Jack’s mother. “Have you been such a fool, such a dolt, such an idiot? Take that! Take that! Take that! As for your precious beans, here they go out of the window. Now off with you to bed. Not a sup shall you drink, and not a bit shall you swallow this very night.”  So Jack went upstairs to his little room in the attic, sad and sorry he was, to be sure. At last he dropped off to sleep.  When he woke up, the room looked so funny. The sun was shining into part of it, and yet all the rest was quite dark and shady. Jack jumped up and went to the window. What do you think he saw? Why, the beans his mother had thrown out of the window into the garden had sprung up into a giant beanstalk which went up and up and up until it reached the sky. So the man spoke truth after all!  The beanstalk grew up quite close past Jack’s window, so all he had to do was to open it and give a jump onto the beanstalk which ran up just like a big ladder. So Jack climbed, and climbed, and climbed, and climbed, and climbed, and climbed, and he climbed until at last he reached the sky. When he got there he found a long broad road going as straight as a dart. So he walked along, and walked along, and he walked along until he came to a great big tall house, and on the doorstep there was a great big tall woman.'];
colors = ['#999999', '#ff0000', '#3366ff', '#ffffff'];
window.speechSynthesis.speak(new SpeechSynthesisUtterance('Welcom back'));


document.getElementById('start reading').addEventListener('click', (event) => {
  let new_button = document.createElement('button');
  new_button.innerText = 'yyy';

  event.target.appendChild(new_button);
  event.target.style.backgroundColor = '#cc6600';
  if (!!pages.length) {
    let element_list = document.getElementById('list');
    let element_image = document.getElementById('image');
    element_image.setAttribute("src", photos.shift());
    let element_pages = document.getElementById('pages');
    element_pages.innerText = pages.shift();
    element_pages.style.backgroundColor = colors.slice(-1)[0];
    element_pages.style.color = colors.shift();
    event.target.innerText = 'Next page ➜';
  } else {
    event.target.innerText = 'Finished';
  }

});

document.getElementById('button').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#ff0000';
  let element_pages2 = document.getElementById('pages');
  element_pages2.replaceChildren();

});

document.getElementById('mic').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(pages.shift()));
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(page2.shift()));
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(page3.shift()));

});