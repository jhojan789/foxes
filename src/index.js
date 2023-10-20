import './styles/index.css';
import {registerImage} from './utils/lazy';
{/* <div class="fox-item">
        <img 
          class="fox-image"
          src="https://randomfox.ca/images/2.jpg"
          alt=""
          >
      </div> */}

const foxContainer = document.getElementById('foxes-container');
const foxAdd = document.getElementById('fox-add');

const min = 1;
const max = 123;

const foxItem = ()=>{
  let random = ()=> Math.floor(Math.random()* (max - min) + min);
  const div = document.createElement('div');
  div.className = 'fox-item';

  const img = document.createElement('img');
  img.className = "fox-image";
  img.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  img.alt = "";

  div.appendChild(img);

  return div;
}

const addFox = () => {
  const foxImg = foxItem();
  foxContainer.append(foxImg);
  registerImage(foxImg);
  
}

foxAdd.addEventListener('click', addFox);

