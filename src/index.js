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
const foxClear = document.getElementById('fox-clear');
const foxButtonContainer = document.getElementById('button-container');

const min = 1;
const max = 123;
const total = 7;
let count = 0;

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

const buttonsAction = (event)=>{
  
  switch(event.target.id){
    case 'fox-add':{
      if(count < total){
        const foxImg = foxItem();
        foxContainer.append(foxImg);
        registerImage(foxImg);
        count++;
        console.log({total,count});
      }
      break;
    }
    case 'fox-clear':{
      
      let foxItems = foxContainer.getElementsByClassName('fox-item');
      while(foxItems.length > 0)
        foxContainer.removeChild(foxItems[0]);
      count = 0;
      break;
    }

  }
}
  
foxButtonContainer.addEventListener('click', buttonsAction);

