    // Тестовые данные: массив объектов, каждый объект содержит массив "yearlyExpences" с расходами за 12 месяцев
    let expencesExamples = [
        { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
        { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
        { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
    ];

    // Ожидаемые результаты для каждого из тестовых объектов (сумма всех расходов, больше 1000)
    let expectedResult = [40590, 148200, 25709];

    // Функция для подсчета суммы расходов больше 1000
    function calculateExpences(expencesArray) {    
        let sum = 0; 
        for (let monthExp of expencesArray) { 
            if (monthExp > 1000) { 
                sum += monthExp; 
            } else if (monthExp <= 1000) {
                let monthNumber = expencesArray.indexOf(monthExp);  // Получаем индекс месяца в массиве
            let date = new Date(0, monthNumber);  // Месяц начинаем с 0, поэтому используется индекс
            console.log(monthNumber + 1, date.toLocaleString("en-GB", { month: "short" }));  // Выводим сокращенное название месяца
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

    