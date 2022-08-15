function addElement() {
  const element = document.createElement('div');
  element.setAttribute('class', 'container');

  element.innerText = 'Hello world I am container';
  console.log(element);
  document.body.append(element);
}
{
  /* <div class="profileContainer">
        <img src="https://via.placeholder.com/600/92c952" />
        <label>Mike</label>
    </div> */
}
function addUser() {
  const profileContainer = document.createElement('div');
  profileContainer.setAttribute('class', 'profileContainer');

  const image = document.createElement('img');
  image.setAttribute('src', 'https://via.placeholder.com/600/92c952');

  const label = document.createElement('label');
  label.innerText = 'Mike';

  profileContainer.append(image);
  profileContainer.append(label);
  console.log(profileContainer);
  document.body.append(profileContainer);
  // print image and name using Javascript
  /*  const profilePic = 'https://via.placeholder.com/600/92c952';
  const name = 'Mike'; */

  //   const img = document.createElement('img');
}
