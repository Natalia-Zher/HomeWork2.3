// Тестовые данные: массив объектов, каждый объект содержит массив "yearlyExpences" с расходами за 12 месяцев
let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
];

// Ожидаемые результаты для каждого из тестовых объектов (сумма всех расходов, больше 1000)
let expectedResult = [40590, 148200, 25709];

// Функция для подсчета суммы расходов больше 1000
// calculateExpences — имя функции, которое описывает ее назначение (расчет расходов).
// (expencesArray) — параметры функции. expencesArray — это массив, который мы передаем 
// в функцию. Он содержит данные о расходах за 12 месяцев.
function calculateExpences(expencesArray) {    
    let sum = 0; // Инициализируем переменную sum, которая будет хранить итоговую сумму расходов

     // Цикл перебирает каждый месяц расходов из массива
    for (let monthExp of expencesArray) { // `monthExp` - это текущий расход на каждом шаге
        if (monthExp > 1000) { // Проверяем, если текущий расход больше 1000
            sum += monthExp; // Если да, добавляем его к общей сумме
        }
    }
    // Возвращаем итоговую сумму расходов больше 1000
    return sum; // Эта сумма будет возвращена из функции
}   

// Функция для тестирования расчета суммы
// testCalculationExp — имя функции, которое описывает ее назначение (тестирование расчета).
// (expectedResult, expencesArray) — параметры функции:
// expectedResult — это ожидаемый результат расчета (значения, с которыми мы будем сравнивать результаты).
// expencesArray — это массив, в котором хранятся данные о расходах для тестирования.
function testCalculationExp(expectedResult, expencesArray) {
    let actualResult = calculateExpences(expencesArray); // вызываем функцию calculateExpences для получения реального результата, передав в нее массив расходов expencesArray.
    if (actualResult === expectedResult) { // проверка, совпадает ли реальный результат с ожидаемым.
        console.log(`${actualResult} vs ${expectedResult} correct calculation`);
    } else {
        console.log(`${actualResult} vs ${expectedResult} incorrect calculation`);
    }
}

// Используем forEach для вызова функции testCalculationExp для каждого тестового объекта
// метод forEach используется для перебора каждого объекта в массиве expencesExamples
// В каждой итерации:
// expencesEx — текущий объект (например, { yearlyExpences: [...] }).
// index — индекс текущего объекта в массиве (используется для получения ожидаемого результата из массива expectedResult).
expencesExamples.forEach((expencesEx, index) => {
    testCalculationExp(expectedResult[index], expencesEx.yearlyExpences); //  для каждого элемента массива expencesExamples мы вызываем функцию testCalculationExp, передавая текущий ожидаемый результат и массив расходов yearlyExpences из объекта expencesEx.
});
