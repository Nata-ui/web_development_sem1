document.addEventListener("DOMContentLoaded", function() {
    const toggleSurnameButton = document.getElementById("toggle-surname");
    const toggleAllButton = document.getElementById("toggle-all");
    const togglePythagorasButton = document.getElementById("toggle-pythagoras");
    const pythagorasTableContainer = document.getElementById("pythagoras-table-container");

    let isSurnameCyrillic = true;
    let isAllCyrillic = true;
    let isPythagorasVisible = false;

    // Функция для смены фамилии
    function toggleSurname() {
        const surnameElement = document.getElementById("surname");

        if (isSurnameCyrillic) {
            surnameElement.innerText = 'Abvgdedova';
        } else {
            surnameElement.innerText = 'Абвгдедова';
        }
        isSurnameCyrillic = !isSurnameCyrillic;
    }

    // Функция для смены всех данных
    function toggleAll() {
        const issuePlaceElement = document.getElementById("issue-place");
        const issueDateElement = document.getElementById("issue-date");
        const issueCodeElement = document.getElementById("issue-code");
        const surnameElement = document.getElementById("surname");
        const nameElement = document.getElementById("name");
        const patronymicElement = document.getElementById("patronymic");
        const dobElement = document.getElementById("dob");
        const birthPlaceElement = document.getElementById("birth-place");
        const genderElement = document.getElementById("gender");



        if (isAllCyrillic) {
            // Переводим на английский
            issuePlaceElement.innerText = 'MIA of Russia in Moscow';
            issueDateElement.innerText = '01.02.2003';
            issueCodeElement.innerText = '456-789';
            surnameElement.innerText = 'Abvgdedova';
            nameElement.innerText = 'Evgenia';
            patronymicElement.innerText = 'Andreevna';
            dobElement.innerText = '01.02.1959';
            birthPlaceElement.innerText = 'Moscow';
            genderElement.innerText = 'female';

        } else {
            // Возвращаем на русский
            issuePlaceElement.innerText = 'ГУ МВД России по гор. Москва';
            issueDateElement.innerText = '01.02.2003';
            issueCodeElement.innerText = '456-789';
            surnameElement.innerText = 'Абвгдедова';
            nameElement.innerText = 'Евгения';
            patronymicElement.innerText = 'Андреевна';
            dobElement.innerText = '01.02.1959';
            birthPlaceElement.innerText = 'г. Москва';
            genderElement.innerText = 'жен.';

        }
        isAllCyrillic = !isAllCyrillic;
    }

    // Функция для создания таблицы Пифагора
    function generatePythagorasTable(size) {
        const table = document.createElement('table');
        table.classList.add('pythagoras-table');

        for (let i = 1; i <= size; i++) {
            const row = document.createElement('tr');

            for (let j = 1; j <= size; j++) {
                const cell = document.createElement('td');
                const value = i * j;
                cell.innerText = value;

                // Разукрашиваем четные, нечетные числа и главную диагональ
                if (i === j) {
                    cell.classList.add('diagonal');
                } else if (value % 2 === 0) {
                    cell.classList.add('even');
                } else {
                    cell.classList.add('odd');
                }

                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        return table;
    }

    // Функция для показа/скрытия таблицы Пифагора
    function togglePythagorasTable() {
        if (isPythagorasVisible) {
            pythagorasTableContainer.innerHTML = '';
            pythagorasTableContainer.style.display = 'none';
        } else {
            const table = generatePythagorasTable(10);
            pythagorasTableContainer.appendChild(table);
            pythagorasTableContainer.style.display = 'block';
        }
        isPythagorasVisible = !isPythagorasVisible;
    }

    // Подключаем обработчики событий к кнопкам
    toggleSurnameButton.addEventListener("click", toggleSurname);
    toggleAllButton.addEventListener("click", toggleAll);
    togglePythagorasButton.addEventListener("click", togglePythagorasTable);
});
