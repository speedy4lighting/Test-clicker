let score = 0;
let clickPower = 1;
let autoClickerPower = 1; // Сколько очков добавляет автокликер
let autoClickerInterval = null; // Интервал автокликера
let upgrade1Cost = 10; // Стоимость улучшения клика
let autoClickerCost = 50; // Стоимость автокликера

// Элементы DOM
const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const upgrade1CostElement = document.getElementById('upgrade1-cost');
const buyUpgrade1Button = document.getElementById('buy-upgrade1');
const autoclickerCostElement = document.getElementById('autoclicker-cost');
const buyAutoclickerButton = document.getElementById('buy-autoclicker');

// Клик по кнопке
clickButton.addEventListener('click', () => {
    score += clickPower;
    updateScore();
});

// Покупка улучшения клика
buyUpgrade1Button.addEventListener('click', () => {
    if (score >= upgrade1Cost) {
        score -= upgrade1Cost;
        clickPower += 1; // Увеличиваем силу клика
        upgrade1Cost *= 2; // Увеличиваем цену улучшения
        updateScore();
        upgrade1CostElement.textContent = upgrade1Cost;
    }
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
