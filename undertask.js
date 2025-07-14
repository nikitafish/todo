 import { createElementAndAdd } from "./modules/dom.js";


 
export function loadingUnderTask(container) {  
  let id = 0;
  const inputContainerUnder = createElementAndAdd('div', { className: 'input-under-task' }, container);
  const underWrapper = createElementAndAdd('div', { className: 'under-wrapper' }, container);


  const inputUnder = createElementAndAdd('input', { 
    className: 'form-title-input', 
    placeholder: "Добавить подзадачу" 
  }, inputContainerUnder);

  const addUnderTask = createElementAndAdd('button', { 
    className: 'Under-task-button', 
    textContent: "+" 
  }, inputContainerUnder);
 
  addUnderTask.addEventListener('click', () => {
    let newId = id++;
    const microtask = {
      id: newId,
      textContent: inputUnder.value
    };

    const readyTask = createElementAndAdd('div', { className: 'ready-task' }, underWrapper); 

    const textUnder = createElementAndAdd('span', { 
      className: 'under-task-text',
      textContent: microtask.textContent
    }, readyTask);

    const removeText = createElementAndAdd('button', { className:"remove-button", textContent: "×" }, readyTask);
    removeText.addEventListener('click', () => {
      readyTask.remove();
    });
  });
}
