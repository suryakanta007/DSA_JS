var kidsWithCandies = function(candies, extraCandies) {
    let maxCndies = Math.max(...candies);
    return candies.map(candies => candies+extraCandies >= maxCndies)
};