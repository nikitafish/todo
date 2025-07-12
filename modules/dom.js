export function createElementAndAdd(element, description = {}, container = null) {
    const item = document.createElement(element)
    
  for(let key in description) {
    item[key] = description[key]
    
  }
 if(container)  container.appendChild(item)
 
 return item
}

export function getElements(selectors = []) {
  return selectors.map(selector => document.querySelector(selector))
}


//   { // Создаем обёртку задачи
//   const taskCard = createElementAndAdd('div', { className: 'task-card' }, tasksList);
//   createElementAndAdd('h3', { className: 'task-card__title', textContent: 'New todo list for Portfolio' }, taskCard);
//   createElementAndAdd('p', { className: 'task-card__description', textContent: 'To next week' }, taskCard);
//   createElementAndAdd('p', { className: 'task-card__count', textContent: '12 tasks' }, taskCard);
//  } 
 
 