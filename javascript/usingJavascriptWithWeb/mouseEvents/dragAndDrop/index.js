/*     
<div id="div1"
    ondrop="drop(event)" 
    ondragover="allowDrop(event)">

    </div>


    <div id="div2">
        <img id="drag1" src="computer.png" 
        width="336" height="69" draggable="true" 
        ondragstart="drag(event)">
    </div>
 */
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  console.log(event.target.id);
  event.dataTransfer.setData('imageId', event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('imageId');
  //   console.log(`inside drop ${data}`);
  console.log(event.target);
  const image = document.getElementById(data);
  event.target.appendChild(image);
}
