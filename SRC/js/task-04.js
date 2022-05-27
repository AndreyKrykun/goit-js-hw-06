const currentVelue = document.querySelector('span');
const buttonDecrement = document.querySelector('[data-action = "decrement"]');
const buttonIncrement = document.querySelector('[data-action = "increment"]');

const counter = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    }

};

buttonDecrement.addEventListener('click', function() {
    counter.decrement();
    console.log(counter);
    currentVelue.textContent = counter.value
});

buttonIncrement.addEventListener('click', function() {
    counter.increment();
    console.log(counter);
    currentVelue.textContent = counter.value
});
