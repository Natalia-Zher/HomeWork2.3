// Тестовые данные: массив объектов, каждый объект содержит массив "yearlyExpences" с расходами за 12 месяцев
let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 3, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 500, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 20, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

// Ожидаемые результаты для каждого из тестовых объектов (сумма всех расходов, больше 1000)
let expectedResult = [40590, 148200, 25709];

// Функция для подсчета суммы расходов больше 1000 и вывода месяцев где меньше 1000
function calculateExpences(expencesArray) {
  let sum = 0; // задаем начальное значение суммы расходов для значений бошьше 1000
  for (let monthNumber = 0; monthNumber < expencesArray.length; monthNumber++) {
    let monthExp = expencesArray[monthNumber]; // задаем переменную в виде массива для номеров месяцев
    if (monthExp > 1000) {
      sum += monthExp; // если значение больше 1000 то добавляем в сумму
    } else {
      let date = new Date(0, monthNumber); // задаем объект даты (оъяснение после кода), где используем наш заданный в цикле индекс monthNumber
      console.log(
        monthNumber + 1,
        date.toLocaleString("en-GB", { month: "short" }) // иначе (если менье 1000) выводим в косоль
      ); // номер месяца (наш индекс + 1 (так как в js начинается с нуля) и сокращенное название месяца
    }
  }
  return sum;
}

// Функция для тестирования расчета суммы
function testCalculationExp(expectedResult, expencesArray) {
  let actualResult = calculateExpences(expencesArray);
  if (actualResult === expectedResult) {
    console.log(`${actualResult} vs ${expectedResult} correct calculation`);
  } else {
    console.log(`${actualResult} vs ${expectedResult} incorrect calculation`);
  }
}

expencesExamples.forEach((expencesEx, index) => {
  testCalculationExp(expectedResult[index], expencesEx.yearlyExpences);
});

// new Date() — это конструктор, который используется для создания нового объекта даты.
// В JavaScript можно передавать разные параметры в этот конструктор, чтобы задать
// конкретную дату.

// 0 — это первый параметр конструктора, который указывает на количество миллисекунд
// с 1 января 1970 года (эпоха Unix). В данном случае 0 означает "1 января 1970 года".
// Таким образом, в этой части конструктора устанавливается начало временной отсчётной точки.

// monthNumber — это второй параметр конструктора, который задает месяц
// (нумерация месяцев в JavaScript начинается с 0). То есть:
// 0 — январь,
// 1 — февраль,
// 2 — март и так далее.
// В этом коде monthNumber — это индекс месяца, который в цикле увеличивается от 0 до 11,
// что соответствует 12 месяцам в году.
