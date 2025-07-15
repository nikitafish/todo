// main.js
import { createElementAndAdd, getElements } from "./modules/dom.js";
import { loadTasks, saveTasks } from "./modules/storage.js";

const [addBigTaskButton, taskCardsContainer] = getElements([
  ".footer__add-btn",
  ".tasks__list"
]);

let bigTasks = loadTasks(); // загрузим из localStorage
renderAllTasks();

// обработчик кнопки добавления новой задачи
addBigTaskButton.addEventListener("click", () => openTaskModal());

function renderAllTasks() {
  taskCardsContainer.innerHTML = ''; // очистим контейнер
  bigTasks.forEach(task => renderTaskCard(task));
}

function renderTaskCard(task) {
  const wrapper = createElementAndAdd('div', { className: "wrapper-recent-task" }, taskCardsContainer);
  createElementAndAdd('span', { className: "text-input", textContent: task.title }, wrapper);
  createElementAndAdd('span', { className: "text-area", textContent: task.description }, wrapper);
  createElementAndAdd('span', { className: "text-length-task", textContent: `Подзадач: ${task.microTasks.length}` }, wrapper);

  // клик для редактирования
  wrapper.addEventListener('click', () => openTaskModal(task));
}

function openTaskModal(existingTask = null) {
  if (document.querySelector('.form-main')) return;

  const modalOverlay = createElementAndAdd('div', { className: 'form-main' }, document.body);
  const modalContent = createElementAndAdd('div', { className: 'form-wrapper' }, modalOverlay);

  const inputAndButtonRow = createElementAndAdd('div', { className: 'input-and-button-row' }, modalContent);
  const inputFieldsColumn = createElementAndAdd('div', { className: 'input-fields-column' }, inputAndButtonRow);

  const titleInput = createElementAndAdd('input', {
    className: 'form-title-input',
    placeholder: "Название задачи",
    value: existingTask ? existingTask.title : ''
  }, inputFieldsColumn);

  const descInput = createElementAndAdd('textarea', {
    className: 'form-description',
    placeholder: "Описание",
    value: existingTask ? existingTask.description : ''
  }, inputFieldsColumn);

  const underWrapper = createElementAndAdd('div', { className: 'under-wrapper' }, modalContent);
  let microTasks = existingTask ? [...existingTask.microTasks] : [];

  // рендерим микрозадачи
  microTasks.forEach(micro => renderMicroTask(micro, underWrapper, microTasks));

  // поле + кнопка добавления подзадачи
  const inputUnder = createElementAndAdd('input', { className: 'form-title-input', placeholder: "Добавить подзадачу" }, modalContent);
  const addUnderBtn = createElementAndAdd('button', { className: "Under-task-button", textContent: "+" }, modalContent);
  addUnderBtn.addEventListener('click', () => {
    if (!inputUnder.value.trim()) return;
    const newMicro = { id: `${Date.now()}_${Math.random()}`, text: inputUnder.value.trim() };
    if (newMicro.text.length > 100) return alert('Слишком длинный текст подзадачи');
    microTasks.push(newMicro);
    renderMicroTask(newMicro, underWrapper, microTasks);
    inputUnder.value = '';
  });

  // кнопка сохранить
  const saveButton = createElementAndAdd('button', { className: "save-button", textContent: "Сохранить" }, modalContent);
  saveButton.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    if (!title) return alert('Название не может быть пустым');
    if (title.length > 100) return alert('Слишком длинное название');
    if (desc.length > 300) return alert('Слишком длинное описание');

    if (existingTask) {
      // редактируем
      existingTask.title = title;
      existingTask.description = desc;
      existingTask.microTasks = microTasks;
    } else {
      // новая задача
      const newTask = {
        id: `${Date.now()}_${Math.random()}`,
        title,
        description: desc,
        microTasks
      };
      bigTasks.push(newTask);
    }
    saveTasks(bigTasks);
    renderAllTasks();
    modalOverlay.remove();
  });

  // закрытие по клику на фон
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });
}

function renderMicroTask(micro, container, microTasks) {
  const readyTask = createElementAndAdd('div', { className: 'ready-task' }, container);
  createElementAndAdd('span', { className: 'under-task-text', textContent: micro.text }, readyTask);
  const removeBtn = createElementAndAdd('button', { className: "remove-button", textContent: "×" }, readyTask);
  removeBtn.addEventListener('click', () => {
    readyTask.remove();
    const index = microTasks.findIndex(m => m.id === micro.id);
    if (index !== -1) microTasks.splice(index, 1);
  });
}
