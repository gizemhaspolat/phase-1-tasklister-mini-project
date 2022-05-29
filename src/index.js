document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const newTask = document.getElementById("new-task-description").value;
      const dueDate = document.getElementById("due-date").value;
      let ul = document.getElementById("tasks");
      let li = document.createElement("li");
      li.setAttribute("draggable", "true");
      li.innerHTML = newTask + " " + dueDate;
      let color = document.getElementById("color").value;
      color === "red"
        ? li.setAttribute("data-number", "1")
        : color === "yellow"
        ? li.setAttribute("data-number", "2")
        : color === "green"
        ? li.setAttribute("data-number", "3")
        : "";

      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "x";
      deleteButton.setAttribute("class", "delete-button");
      ul > li.appendChild(deleteButton).addEventListener("click", removeItem);
      ul.appendChild(li);
      li.style.color = color;

      document.getElementById("new-task-description").value = "";

      function removeItem() {
        this.parentNode.remove();
      }
    });
  document.getElementById("sorting-button").addEventListener("click", () => {
    Array.from(tasks.getElementsByTagName("LI"))
      .sort((a, b) =>
        a
          .getAttribute("data-number")
          .localeCompare(b.getAttribute("data-number"))
      )
      .forEach((li) => tasks.appendChild(li));
  });
});
