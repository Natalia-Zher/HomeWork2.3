//данные очкам игроков 
const players = [
    {"id": 1, "name": "Ivan", "scorePoints": 4500},
    {"id": 2, "name": "Petr", "scorePoints": 3600},
    {"id": 3, "name": "Vadim", "scorePoints": 3433},
    {"id": 4, "name": "Olga", "scorePoints": 2356}
];

// задаем пустой массив для хранения очков
let scores = [];

// заполняем новый массив для хранения очков данными из оригинального массива с помощью цикла for in
for (let i in players) {
    scores.push(players[i].scorePoints)
};

// находим максимальное значение очков с помощью метода max.math() из объекта Math и оператора spread - ...
let maxScore = Math.max(...scores);

// находим игрока, у которого максимальное значение очков
let MaxScorePlayer = null; // бронируем ячейку под переменную, куда мы сохраним игрока у которого максимальное количество очков
for (let i in players){
    if(players[i].scorePoints === maxScore){  // если у игрока максимальное количество очков
        MaxScorePlayer=players[i]; // то сохраняем его в переменную MaxScorePlayer
        break; // останавливаем цикл сразу после находжения игрока с максимальным количеством очков
    }
}

// выводим в консоль игрока у которого максимальное количество очков
console.log(`Максимальное количество очков ${maxScore} получил игрок ${MaxScorePlayer.name}`);


