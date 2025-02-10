// Q1 変数
let nickname = 'ごっしー';
let age = '28';

let selfIntroduction = '私のニックネームは' + nickname + 'です。年齢は' + age + 'です。';

console.log(selfIntroduction);

// Q2 配列

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let templateQ2 = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(templateQ2);

// Q3 オブジェクト

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4 配列 ✕ オブジェクト

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6 関数
function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function () {
  console.log('World');
}

sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';
console.log(user);


function sayHello() {
  console.log('Hello!');
}
user.sayHello = sayHello();

// Q8 引数
let calc = {};

function add(x, y){
  x = 3;
  y = 4;
  console.log(x + y);
}
calc.add = add();

function subtract(x, y){
  x = 12;
  y = 2;
  console.log(x - y);
}
calc.subtract = subtract();

function multiply(x, y){
  x = 7;
  y = 7;
  console.log(x * y);
}

calc.multiply = multiply();

function divide(x, y){
  x = 10;
  y = 2;
  console.log(x / y);
}

calc.divide = divide();

// Q9 返り値

function remaindar(x, y){
  x = 5;
  y = 3;
  console.log(x + 'を' + y + 'で割ったあまりは' + (x % y) + 'です。');
}

remaindar();

// Q10 スコープ

// 
// ーーーーーーーーーーーーーーーーーーーー
// function foo() {
//   let x = 1;
// }
// console.log(x);
// ーーーーーーーーーーーーーーーーーーーー

// 上記にて、console.log(x); においてコンソールに 1 が出力されることはなく、
// x is not defined（変数 x が定義されていない）というエラーが出力されます。
// その理由は、
// まず、app.jsのグローバルスコープ上でxの値が定義されていないためです。

// let x =1;
// console.log(x);

// グローバルスコープとは、どこからでも参照できる変数のことです。

// また、Q10においてｘの値が定義されているのは、
// 関数fooのローカルスコープ（関数スコープ）内です。
// そのため、console.log(x);も同じ関数スコープ内に記載し、
// 関数foo();を呼び出す必要があるのに、
// console.log(x);が外に起票されているため問題のエラーが発生しているのです。

// エラーを起こさず表記するには、以下のように記載する必要があります。
function foo() {
  let x = 1;
  console.log(x);
}

foo();


// スコープの学習で参照したサイトと情報
// https://www.codegrid.net/articles/2017-js-scope-1/
// JavaScriptにおけるスコープとは、変数がどの場所から参照できるのかを定義する概念です。言い換えれば、変数の有効範囲ということです。同じスコープ上にある変数にはアクセスできますが、スコープが違えば、別々のスコープにある変数にはお互いにアクセスすることができません。

// それでは、なぜスコープが必要なのでしょうか。スコープには、次のような役割があります。

// 変数名の競合を避ける
// JavaScriptでは関数やブロックごとに別々のスコープが作られるため、プログラム内で同じ名前の変数があってもスコープが違えば別物となります。

// もしスコープがなければ、プログラム全体で使われるすべての変数に、一意な名前を付けて衝突を避けなければならなくなります。ですがJavaScriptにはスコープがありますので、その必要はありません。

// メモリの消費を避ける
// JavaScriptには、使われなくなったメモリ領域を自動的に解放するガベージコレクションという仕組みがあります。これによって、無駄なメモリの消費を回避しています。

// もしスコープがなければ、すべての変数がグローバルに属することになります。そして、グローバルに属する変数はプログラムから参照され続けるため、ガベージコレクションされません。つまり、ページを閉じるまでの間ずっと、不要なメモリ領域を確保し続けてしまいます。

// 実際にはスコープがあるため、関数の実行が終われば、そのスコープに属する変数は不要とみなされ、ガベージコレクションの対象となります。

// スコープは、グローバルスコープとローカルスコープの2種類が存在します。
// さらに、ローカルスコープは、関数スコープとブロックスコープ{}に分類できます。

// 応用編 問題
// Q1 標準組み込みオブジェクト
// 標準組み込みオブジェクト Math を使用し、
// 0 ~ 9 のランダムな整数をコンソールに出力してください。

// 0から9までのランダムな整数を生成
let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

// Q2 コールバック関数
// 関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。

// Hello World!

function sayHello(){
  console.log('Hello World!');
}

setTimeout(sayHello,3000);

// Q3 if (条件分岐)
// 変数 num に 任意の数値を代入し、
// 下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

// 条件
// num が 0 より大きければnum is greater than 0
// num が 0 より小さければnum is less than 0
// num が 0 であればnum is 0

let num = 5;
  if (num > 0){
  console.log('num is greater than 0');
}
  else if (num < 0){
    console.log('num is less than 0');
  }
  else if (num = 0){
    console.log('num is 0');
  }

// Q4 for (繰り返し処理)
// 変数 numbers に空の配列を代入した後、
// 0 ~ 99 までの数字を変数 numbers に全て追加し、
// 値が追加された状態の変数 numbers をコンソールに出力してください

let numbers = [];

for (let i = 0; i < 100; i++){
  numbers = (i);
  console.log(numbers);
}

// Q5 for ✕ if
// 以下の変数 mixed から 要素を一つずつ取り出し、
// 下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

// 条件
// Number であり偶数の時は even
// Number であり奇数の時は odd
// Number 以外の時は not number

// for (i = 0; i < mixed.length; i++){}
// mixed.forEach(function(i)){}

let mixed = [4, '2', 5, '8', '9', 0, 1];
console.log(mixed);
for (let i = 0; i < mixed.length; i++){
  if (typeof mixed[i] === 'number'&&  mixed[i] % 2 == 0){
    console.log('even');
  }else if ( typeof mixed[i] === 'number'&&  mixed[i] % 2 != 0){
    console.log('odd');
  }
  else{
    console.log('not number');
  }
}
