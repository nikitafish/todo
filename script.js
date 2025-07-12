
import { createElementAndAdd } from "./modules/dom.js";
import { getElements } from "./modules/dom.js";
const [addTaskButton, tasksList] = getElements([".footer__add-btn",".tasks__list"])


const tasks = [
  {
    id: 1,
    title: "Большая задача 1",
    description: "Описание большой задачи 1",
    microTasks: [
      { id: 1, title: "Микро-задача 1", status: "On going" },
      { id: 2, title: "Микро-задача 2", status: "Completed" },
  
    ]
  },
  {
    id: 2,
    title: "Большая задача 2",
    description: "Описание большой задачи 2",
    microTasks: [
      { id: 1, title: "Микро-задача 1", status: "Canceled" },
      { id: 2, title: "Микро-задача 2", status: "In progress" },
   
    ]
  }
]






// В обработчике клика кнопки добавления
addTaskButton.addEventListener("click", () => {
  if (document.querySelector('.form-main')) return;
  
  const formMain = createElementAndAdd('div', {className:'form-main'}, document.body);
  
  const formWrapper = createElementAndAdd('div', {className:'form-wrapper'}, formMain);


createElementAndAdd('input', { className: 'form-title-input', placeholder: "Название задачи" }, formWrapper);

createElementAndAdd('textarea', { className: 'form-description', placeholder: "Описание" }, formWrapper);
const buttonWrapper = createElementAndAdd('div', {className:'button-wrapper'}, formWrapper);
const buttonAddMicro = createElementAndAdd('button', { className: 'form-button-add', textContent: "Добавить", }, buttonWrapper)
const buttonRemoveMicro = createElementAndAdd('button', { className: 'form-button-remove', textContent: "Отмена", }, buttonWrapper)

buttonAddMicro.addEventListener('click', () =>
  {
     if (document.querySelector('.title-wrapper')) return;
 
    const titleWrapper = createElementAndAdd('div', {className:'title-wrapper'}, formWrapper);
    createElementAndAdd('input', { className: 'form-title-micro', placeholder: "Название пункта" }, titleWrapper);
    createElementAndAdd('textarea', { className: 'form-description-micro', placeholder: "Описание пункта" }, titleWrapper);
    const buttonWrapper = createElementAndAdd('div', {className:'button-wrapper'}, titleWrapper);
    const ready = createElementAndAdd('button', { className: 'form-button-ready', textContent: "Готово" }, buttonWrapper);
    const cancel = createElementAndAdd('button', { className: 'form-button-cancel', textContent: "Отмена" }, buttonWrapper);

  }
)




  
  // Закрытие при клике вне формы
  formMain.addEventListener('click', (e) => {
    if(e.target === formMain) formMain.remove();
  });
});