// Описываем кнопку с помощью конструктора класса Button
class Button {
  constructor(width, height, type, color) {
    this.props = {
      // создаем объект props для хранения параметров кнопки
      width: width, // ширина кнопки
      height: height, // высота кнопки
      type: type, // тип кнопки
      color: color, // цвет кнопки
    };
  }

  // Создадим метод кнопки onClick, который будет выводить в консоль информацию о нашей кнопке
  onClick(buttonForTest) {
    console.log(this.props); // Выводим объект props в консоль
  }
}

// Тестируем аргументы кнопки и выводим текст, если аргументы не соответствуют заданным значениям
function testButton(button) {
  // Проверяем свойства в объекте props
  if (button.props.width !== 50) {
    console.log(`Expected width 50, but got ${button.props.width}`);
  } else {
    console.log(`Width test passed: ${button.props.width}`);
  }

  if (button.props.height !== 150) {
    console.log(`Expected height 150, but got ${button.props.height}`);
  } else {
    console.log(`Height test passed: ${button.props.height}`);
  }

  if (button.props.type !== "button") {
    console.log(`Expected type 'button', but got '${button.props.type}'`);
  } else {
    console.log(`Type test passed: '${button.props.type}'`);
  }

  if (button.props.color !== "green") {
    console.log(`Expected color 'green', but got '${button.props.color}'`);
  } else {
    console.log(`Color test passed: '${button.props.color}'`);
  }
}

// Создаем экземпляр кнопки и передаем аргументы (ширину, высоту, тип и цвет) в конструктор кнопки
const myFirstButton = new Button(10, 150, "button", "green");
// Вызываем метод onClick - выводим аргументы нашей кнопки
console.log("Параметры кнопки myFirstButton: ");
myFirstButton.onClick();
console.log(" ");
// Тестируем - выводим результаты тестирования текстового экземпляра кнопки
console.log("Test results for myFirstButton: ");
testButton(myFirstButton);

console.log("___");
console.log(" ");

// Создаем еще один экземпляр кнопки и передаем аргументы (ширину, высоту, тип и цвет) в конструктор кнопки
const mySecondButton = new Button(50, 100, "button", "red");
// Вызываем метод onClick - выводим аргументы нашей кнопки
console.log("Параметры кнопки mySecondButton: ");
mySecondButton.onClick();
console.log(" ");
// Тестируем - выводим результаты тестирования текстового экземпляра кнопки
console.log("Test results for mySecondButton: ");
testButton(mySecondButton);

console.log("___");
console.log(" ");
