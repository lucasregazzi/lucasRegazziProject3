const stillLifeApp = {};

let indexCorr = Math.floor((Math.random() * 3));
let indexCorr2 = Math.floor((Math.random() * 3));

const firstArray = [
    {
        id: 'option1',
        value: 'grapes',
        url: '/assets/grapes.png',
        alt: 'a bounty of grapes'
    },
    {
        id: 'option2',
        value: 'a pencil',
        url: '/assets/pencil.png',
        alt: 'a stray pencil'
    },
    {
        id: 'option3',
        value: 'a sleeping cat',
        url: '/assets/cat.png',
        alt: 'a sleeping cat'
    },
    {
        id: 'option4',
        value: 'an apple core',
        url: '/assets/apple.png',
        alt: 'an apple core'
    }    
];
const secondArray = [
    {
        id: 'option5',
        value: 'spilled milk',
        url: '/assets/milky.png',
        alt: 'a cup of spilled milk'
    },
    {
        id: 'option6',
        value: 'a clock',
        url: '/assets/clock.png',
        alt: 'a vintage clock radio'
    },
    {
        id: 'option7',
        value: 'candles',
        url: '/assets/candles.png',
        alt: 'two candles held by modern candlesticks'
    },
    {
        id: 'option8',
        value: 'an iPhone',
        url: '/assets/iphone.png',
        alt: 'an iPhone with a call to Home in progress'
    }      
];

const materializeFirstObjects = () => firstArray.forEach((object) => {
    $('.selectionsOne').append(`
    <div class="formCheckInline" id="${object['id']}">
    <input type="checkbox" id="inlineCheckbox1" value="${object['id']}">
    <label for="inlineCheckbox1" value="${object['value']}">${object['value']}</label>
    </div>
    `);
    $('.canvas').append(`
    <div class="i${object['id']}">
    <img src=".${object['url']}" alt="${object['alt']}"/>
    </div>
    `)
});
const materializeSecondObjects = () => secondArray.forEach((object) => {
    $('.selectionsTwo').append(`
    <div class="formCheckInline" id="${object['id']}">
    <input type="checkbox" id="inlineCheckbox1" value="${object['id']}">
    <label for="inlineCheckbox1" value="${object['value']}">${object['value']}</label>
    </div>
    `);
    $('.canvas').append(`
    <div class="i${object['id']}">
    <img src=".${object['url']}" alt="${object['alt']}"/>
    </div>
    `)
});

const makeFirstSelectionVisible = () => {
    $(`.formCheckInline#${firstArray[indexCorr]['id']}`).addClass('vis');
    $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).addClass('vis');
    $(`.i${firstArray[indexCorr]['id']}`).addClass('vis');
    $(`.i${secondArray[indexCorr2]['id']}`).addClass('vis');
}

const toggleClick = () => {
    $('.firstSelection .toggleRight').on('click', function(){
        if (indexCorr == 3) {
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).removeClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).removeClass('vis');
            indexCorr = (indexCorr - 3);
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).addClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).addClass('vis');
        } else {
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).removeClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).removeClass('vis');
            indexCorr = (indexCorr + 1);
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).addClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).addClass('vis');
        }
    });
    $('.firstSelection .toggleLeft').on('click', function () {
        if (indexCorr == 0) {
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).removeClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).removeClass('vis');
            indexCorr = (indexCorr + 3);
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).addClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).addClass('vis');
        } else {
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).removeClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).removeClass('vis');
            indexCorr = (indexCorr - 1);
            $(`.formCheckInline#${firstArray[indexCorr]['id']}`).addClass('vis');
            $(`.i${firstArray[indexCorr]['id']}`).addClass('vis');
        }
    });
    $('.secondSelection .toggleRight').on('click', function () {
        if (indexCorr2 == 3) {
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).removeClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).removeClass('vis');
            indexCorr2 = (indexCorr2 - 3);
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).addClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).addClass('vis');
        } else {
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).removeClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).removeClass('vis');
            indexCorr2 = (indexCorr2 + 1);
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).addClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).addClass('vis');
        }
    });
    $('.secondSelection .toggleLeft').on('click', function () {
        if (indexCorr2 == 0) {
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).removeClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).removeClass('vis');
            indexCorr2 = (indexCorr2 + 3);
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).addClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).addClass('vis');
        } else {
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).removeClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).removeClass('vis');
            indexCorr2 = (indexCorr2 - 1);
            $(`.formCheckInline#${secondArray[indexCorr2]['id']}`).addClass('vis');
            $(`.i${secondArray[indexCorr2]['id']}`).addClass('vis');
        }
    });
}

const dropIt = () => {
    $('.question').on('click', function(){
        $('.infoDrop').toggle();
        $('.question').toggleClass('flipped');
    })
}

stillLifeApp.init = () => {
    dropIt();
    toggleClick();
    materializeFirstObjects();
    materializeSecondObjects();
    makeFirstSelectionVisible();
}

$(function() {
    stillLifeApp.init();
});