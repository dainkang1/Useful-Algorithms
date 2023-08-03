var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1; i < dp.length; i++) {
        for(let coin of coins) {
            console.log(coin, 'coin')
            if(i-coin >= 0){

                console.log(i, coin, i - coin, ' i - coin')
                console.log(dp[i], 'dp[i]', dp[i-coin]+1, 'dp[i-coin]+1')

                 dp[i] = Math.min(dp[i], dp[i-coin]+1);
                 
                 console.log(dp, 'dp has been set')
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};





1 coin
1 1 0  i - coin
Infinity dp[i] 1 dp[i-coin]+1
[
         0,        1,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
2 coin
5 coin
1 coin
2 1 1  i - coin
Infinity dp[i] 2 dp[i-coin]+1
[
         0,        1,
         2, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
2 coin
2 2 0  i - coin
2 dp[i] 1 dp[i-coin]+1
[
         0,        1,
         1, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
5 coin
1 coin
3 1 2  i - coin
Infinity dp[i] 2 dp[i-coin]+1
[
         0,        1,
         1,        2,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
2 coin
3 2 1  i - coin
2 dp[i] 2 dp[i-coin]+1
[
         0,        1,
         1,        2,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
5 coin
1 coin
4 1 3  i - coin
Infinity dp[i] 3 dp[i-coin]+1
[
         0,        1,
         1,        2,
         3, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
2 coin
4 2 2  i - coin
3 dp[i] 2 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2, Infinity,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
5 coin
1 coin
5 1 4  i - coin
Infinity dp[i] 3 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        3,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
2 coin
5 2 3  i - coin
3 dp[i] 3 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        3,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
5 coin
5 5 0  i - coin
3 dp[i] 1 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        1,
  Infinity, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
1 coin
6 1 5  i - coin
Infinity dp[i] 2 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        1,
         2, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
2 coin
6 2 4  i - coin
2 dp[i] 3 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        1,
         2, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
5 coin
6 5 1  i - coin
2 dp[i] 2 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        1,
         2, Infinity,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
1 coin
7 1 6  i - coin
Infinity dp[i] 3 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        1,
         2,        3,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
2 coin
7 2 5  i - coin
3 dp[i] 2 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        1,
         2,        2,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
5 coin
7 5 2  i - coin
2 dp[i] 2 dp[i-coin]+1
[
         0,        1,
         1,        2,
         2,        1,
         2,        2,
  Infinity, Infinity,
  Infinity, Infinity
] dp has been set
1 coin
8 1 7  i - coin
Infinity dp[i] 3 dp[i-coin]+1
[
         0,        1,        1,
         2,        2,        1,
         2,        2,        3,
  Infinity, Infinity, Infinity
] dp has been set
2 coin
8 2 6  i - coin
3 dp[i] 3 dp[i-coin]+1
[
         0,        1,        1,
         2,        2,        1,
         2,        2,        3,
  Infinity, Infinity, Infinity
] dp has been set
5 coin
8 5 3  i - coin
3 dp[i] 3 dp[i-coin]+1
[
         0,        1,        1,
         2,        2,        1,
         2,        2,        3,
  Infinity, Infinity, Infinity
] dp has been set
1 coin
9 1 8  i - coin
Infinity dp[i] 4 dp[i-coin]+1
[ 0, 1, 1, 2, 2, 1, 2, 2, 3, 4, Infinity, Infinity ] dp has been set
2 coin
9 2 7  i - coin
4 dp[i] 3 dp[i-coin]+1
[ 0, 1, 1, 2, 2, 1, 2, 2, 3, 3, Infinity, Infinity ] dp has been set
5 coin
9 5 4  i - coin
3 dp[i] 3 dp[i-coin]+1
[ 0, 1, 1, 2, 2, 1, 2, 2, 3, 3, Infinity, Infinity ] dp has been set
1 coin
10 1 9  i - coin
Infinity dp[i] 4 dp[i-coin]+1
[ 0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 4, Infinity ] dp has been set
2 coin
10 2 8  i - coin
4 dp[i] 4 dp[i-coin]+1
[ 0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 4, Infinity ] dp has been set
5 coin
10 5 5  i - coin
4 dp[i] 2 dp[i-coin]+1
[ 0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, Infinity ] dp has been set
1 coin
11 1 10  i - coin
Infinity dp[i] 3 dp[i-coin]+1
[
  0, 1, 1, 2, 2,
  1, 2, 2, 3, 3,
  2, 3
] dp has been set
2 coin
11 2 9  i - coin
3 dp[i] 4 dp[i-coin]+1
[
  0, 1, 1, 2, 2,
  1, 2, 2, 3, 3,
  2, 3
] dp has been set
5 coin
11 5 6  i - coin
3 dp[i] 3 dp[i-coin]+1
[
  0, 1, 1, 2, 2,
  1, 2, 2, 3, 3,
  2, 3
] dp has been set