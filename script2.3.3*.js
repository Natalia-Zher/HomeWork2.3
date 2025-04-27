// Класс для пользователя
class User {
  constructor(balance) {
    this.balance = balance; // у пользователя есть баланс (деньги на счету)
  }
  deduct(amount) {
    this.balance -= amount; // метод, уменьшающий баланс на определенную сумму (стоимость посылки например)
  }
}

// Класс для посылки:
class Parcel {
  constructor(id, code, price) {
    this.id = id; // ID посылки
    this.code = code; // Код получения посылки (из смс и базы)
    this.price = price; // Стоимость посылки
  }
}

// Данные (переменные):
const user = new User(500); // Создаем пользователя с баллансом 500
const parcel = new Parcel("1432HGF", "A001DFX0", 100); // Создаём посылку: id, код, стоимость
const smsCode = "A001DFX0"; // // Код, который пришёл пользователю в СМС
const lockers = [null, null, null, "1432HGF", null]; // Состояние почтамата (ячейки)

// Проверка кода:
if (smsCode === parcel.code) {
  // Если код из СМС совпадает с кодом в базе данных посылки
  const lockerNumber = lockers.indexOf(parcel.id); // Находим номер ячейки, где лежит посылка (ищем id посылки в массиве lockers)
  if (lockerNumber !== -1) {
    // Если нашли ячейку (если lockerNumber не равен -1)
    user.deduct(parcel.price); // Списываем стоимость посылки с баланса пользователя
    console.log(
      `Заберите посылку ${parcel.id} из ячейки № ${
        lockerNumber + 1
      }. Ваш счет составляет: ${user.balance} ед.`
    );
    // Выводим сообщение: какой id посылки, номер ячейки и сколько денег осталось на счету
  } else {
    console.log("Посылка не найдена в почтамате"); // если посылка не найдена
  }
} else {
  console.log("Неверный код получения"); // Если код из смс не совпал с базой данных
}
