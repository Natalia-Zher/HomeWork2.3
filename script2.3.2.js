// Описываем кнопку с помощью конструктора класса Button
class Button {
    constructor(width, height, type, color) {
      this.props = {  // создаем объект props для хранения параметров кнопки
        width: width, // ширина кнопки
        height: height, // высота кнопки
        type: type, // тип кнопки
        color: color // цвет кнопки
      };
    }
  
    // Создадим метод кнопки onClick, который будет выводить в консоль информацию о нашей кнопке
    onClick() {
      console.log(this.props);  // Выводим объект props в консоль
    }
  }
  
  // Создаем экземпляр кнопки и передаем аргументы (ширину, высоту, тип и цвет) в конструктор кнопки
  const myFirstButton = new Button(50, 150, 'button', 'green');
  
  // Привязываем метод onClick к текущему объекту myFirstButton, чтобы сохранить правильный контекст
  myFirstButton.onClick = myFirstButton.onClick.bind(myFirstButton);
  
  // Тестируем аргументы кнопки и выводим текст, если аргументы не соответствуют заданным значениям
  function testButton() {
    // Cоздаем экземпляр для тестирования
    const testBtn = new Button(40, 100, 'other type', 'blue');
    // Проверяем свойства в объекте props
    console.assert(testBtn.props.width === 50, `Expected 50, but got ${testBtn.props.width}`);
    console.assert(testBtn.props.height === 150, `Expected 150, but got ${testBtn.props.height}`);
    console.assert(testBtn.props.type === 'button', `Expected 'button', but got ${testBtn.props.type}`);
    console.assert(testBtn.props.color === 'green', `Expected 'green', but got ${testBtn.props.color}`);
  }
  
  // Тестируем - выводим результаты тестирования тектового экзмепляра кнопки
  testButton();
  
  // Вызываем метод onClick - выводим аргументы нашей кнопки
  myFirstButton.onClick();
  