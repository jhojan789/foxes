
const app = document.getElementById('app');

const isIntersecting = (entry)=>{
  return entry.isIntersecting;
}

const action = (entry)=>{
  const node = entry.target;
  console.log('Hello');
  
  observer.unobserve(node);
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(entries=>{
  entries.filter(isIntersecting).forEach(action)
}, options);


export const registerImage = (image)=>{
  observer.observe(image);
}