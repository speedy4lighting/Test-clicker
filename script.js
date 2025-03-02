let score = 0;
let clickPower = 1;
let autoClickerInterval = null;

// Элементы DOM
const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const upgrade1CostElement = document.getElementById('upgrade1-cost');
const buyUpgrade1Button = document.getElementById('buy-upgrade1');
const upgrade2CostElement = document.getElementById('upgrade2-cost');
const buyUpgrade2Button = document.getElementById('buy-upgrade2');

// Цены улучшений
let upgrade1Cost = 10;
let upgrade2Cost = 50;

// Клик по кнопке
clickButton.addEventListener('click', () => {
    score += clickPower;
    updateScore();
});

// Покупка улучшения 1
buyUpgrade1Button.addEventListener('click', () => {
    if (score >= upgrade1Cost) {
        score -= upgrade1Cost;
        clickPower += 1;
        upgrade1Cost *= 2; // Увеличиваем цену
        updateScore();
        upgrade1CostElement.textContent = upgrade1Cost;
    }
});

// Покупка улучшения 2
buyUpgrade2Button.addEventListener('click', () => {
    if (score >= upgrade2Cost && !autoClickerInterval) {
        score -= upgrade2Cost;
        autoClickerInterval = setInterval(() => {
            score += clickPower;
            updateScore();
        }, 1000); // Автоклик каждую секунду
        upgrade2CostElement.textContent = 'Куплено';
        buyUpgrade2Button.disabled = true;
    }
});

// Обновление счета
function updateScore() {
    scoreElement.textContent = score;
}let score = 0;
let clickPower = 1;
let autoClickerPower = 1; // Сколько очков добавляет автокликер
let autoClickerInterval = null; // Интервал автокликера
let autoClickerCost = 50; // Стоимость автокликера

// Элементы DOM
const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const autoclickerCostElement = document.getElementById('autoclicker-cost');
const buyAutoclickerButton = document.getElementById('buy-autoclicker');

// Клик по кнопке
clickButton.addEventListener('click', () => {
    score += clickPower;
    updateScore();
});

// Покупка автокликера
buyAutoclickerButton.addEventListener('click', () => {
    if (score >= autoClickerCost && !autoClickerInterval) {
        score -= autoClickerCost;
        autoClickerInterval = setInterval(() => {
            score += autoClickerPower; // Добавляем очки каждую секунду
            updateScore();
        }, 1000); // Интервал 1000 мс = 1 секунда
        autoclickerCostElement.textContent = 'Куплено';
        buyAutoclickerButton.disabled = true;
    }
});

// Обновление счета
function updateScore() {
    scoreElement.textContent = score;
}
