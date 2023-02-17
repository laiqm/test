
const input = $('<input type="text"></input>').prependTo('.select-goods');
const priceMap = new Map();
input.keyup(function (e) {
    if (e.keyCode == 13) {
        console.log('開始設置');

        var val = input.val().replace(/[^0-9\s]/g, '');
        input.val(val);
        var prices = val.split(/\s+/);
        if (prices.length < 1) return;
        var valid = true;
        prices.forEach(item => {
            if (item < 130) valid = false;
        });
        if (!valid) {
            alert('其中包含價格過低設置，請檢查');
            return;
        };
        var base = prices[0] - 0;
        var key = '精选主题房';
        priceMap.set(key, (base * 0.9 / 0.85).toFixed(2));
        console.log(key, base);

        key = '每日';
        base = base + Math.floor(Math.random() * 5 + 5);
        priceMap.set(key, (base * 0.9 / 0.35).toFixed(2));
        console.log(key, base);

        key = '情定爱情海';
        base = base + Math.floor(Math.random() * 5 + 5);
        priceMap.set(key, (base * 0.9 / 0.55).toFixed(2));
        console.log(key, base);

        key = '法式浪漫';
        base = base + Math.floor(Math.random() * 5 + 5);
        priceMap.set(key, (base * 0.9 / 0.85).toFixed(2));
        console.log(key, base);

        key = '舒适双床';
        if (prices.length >= 2) {
            priceMap.set(key, (prices[1] * 0.9 / 0.85).toFixed(2));
            console.log(key, prices[1]);
        } else {
            priceMap.set(key, (base * 0.9 / 0.85).toFixed(2));
            console.log(key, base);
        }

        key = '北欧假日';
        base = base + Math.floor(Math.random() * 5 + 5);
        priceMap.set(key, (base * 0.9 / 0.80).toFixed(2));
        console.log(key, base);

        key = '美式古典';
        base = base + Math.floor(Math.random() * 5 + 5);
        priceMap.set(key, (base * 0.9 / 0.85).toFixed(2));
        console.log(key, base);

        key = '田园温馨';
        base = base + Math.floor(Math.random() * 5 + 5);
        priceMap.set(key, (base * 0.9 / 0.85).toFixed(2));
        console.log(key, base);

        key = '家庭双床房';
        if (prices.length >= 3) {
            priceMap.set(key, (prices[2] * 0.9 / 0.80).toFixed(2));
            console.log(key, prices[2]);
        } else {
            priceMap.set(key, (base * 0.9 / 0.80).toFixed(2));
            console.log(key, base);
        }

        priceMap.forEach((val, key) => setPriceByName(key, val));
    }
});
function setPriceByName(name, val, rate) {
    var inputBox = $('td:contains("' + name + '")').parent('tr').find('.mtd-input');

    inputBox.val(val);
}

