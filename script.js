
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






addTaskButton.addEventListener("click", () => {

if (document.querySelector('.form-main')) return

const formMain = createElementAndAdd('form', {className:'form-main'}, document.body)



 
  
});
