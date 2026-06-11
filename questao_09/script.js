const input = document.getElementById("input");
const button = document.getElementById("button");
const tableBody = document.getElementById("tableBody");

let tasksList = [];

function renderTable(list) {
    if (list.length > 0) {
        tableBody.innerHTML = "";

        list.forEach((element, index) => {
            tableBody.innerHTML += `
                <tr>
                    <td>
                        <input id="check" class="form-check-input" type="checkbox" data-index="${index}" ${element.completed ? "checked" : ""}>
                    </td>
                    <td class="${element.completed ? "text-decoration-line-through" : ""}">
                        ${element.title}
                    </td>
                </tr>
            `;
        });
    } else {
        tableBody.innerHTML = tableBody.innerHTML = `
            <tr>
                <td colspan="2">Nenhuma tarefa pendente!</td>
            </tr>
        `;
    }
};

button.addEventListener("click", () => {
    const inputValue = input.value.trim();
    
    if (inputValue) {
        tasksList.push({
            title: inputValue,
            completed: false
        });
        renderTable(tasksList);
        input.value = "";
    };
});

tableBody.addEventListener("change", (event) => {
    if(event.target.matches(".form-check-input")) {
        const index = event.target.dataset.index;
        tasksList[index].completed = !tasksList[index].completed;
        renderTable(tasksList);
    };
});