
const app = document.getElementById('app');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25
}

const isIntersecting = (entry)=>{
  return entry.isIntersecting;
}

const action = (entry)=>{
  const foxItem = entry.target;
  const foxImg = foxItem.querySelector('img');
  const url = foxImg.dataset.src;
  foxImg.src = url;

  
  observer.unobserve(foxItem);
}



const observer = new IntersectionObserver(entries=>{
  entries.filter(isIntersecting).forEach(action)
},observerOptions);


export const registerImage = (image)=>{
  observer.observe(image);
}