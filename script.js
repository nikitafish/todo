import { createElementAndAdd } from "./modules/dom.js";
import { getElements } from "./modules/dom.js";
import { loadingUnderTask } from "./undertask.js";
const [addBigTaskButton, taskCardsContainer] = getElements([
  ".footer__add-btn", 
  ".tasks__list"
]);

let nextTaskId = 0

const bigTasks = [
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
];

// Обработчик клика по кнопке добавления большой задачи
addBigTaskButton.addEventListener("click", () => {
  if (document.querySelector('.form-main')) return;

  // Создаём модальное окно и внутренние контейнеры
  const modalOverlay = createElementAndAdd('div', { className: 'form-main' }, document.body);
  const modalContent = createElementAndAdd('div', { className: 'form-wrapper' }, modalOverlay);

  // Контейнер: строка с полями и кнопкой
  const inputAndButtonRow = createElementAndAdd('div', { className: 'input-and-button-row' }, modalContent);

  // 
  const inputFieldsColumn = createElementAndAdd('div', { className: 'input-fields-column' }, inputAndButtonRow);
  loadingUnderTask(modalContent, )





  const bigTaskTitleInput = createElementAndAdd('input', { 
    className: 'form-title-input', 
    placeholder: "Название задачи" 
  }, inputFieldsColumn);

  const bigTaskDescriptionInput = createElementAndAdd('textarea', { 
    className: 'form-description', 
    placeholder: "Описание" 
  }, inputFieldsColumn);


 


  

  // Закрытие модального окна при клике вне контента
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });
});
