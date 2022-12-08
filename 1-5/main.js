function juicefactory(fruits) {
    console.log(fruits + 'を受け取りました。ジュースにして返します');
    return fruits + 'ジュース';
}

let orangejuice = juicefactory('みかん');
console.log(orangejuice + 'が届きました');
