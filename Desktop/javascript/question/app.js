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

let x =1;
console.log(x);

// 試しに133行目でlet x =1;と書いてから134行目でconsole.log(x);
// と書くと、１という値が表示されました。
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
