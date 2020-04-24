// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // the current sock that the code is looking for pairs of
  let sockToCount = 0;
  // the total number of socks for the sock the code is currently looking for pairs of
  let sockCount = 0;
  // the total number of pairs of socks in the whole sock collection
  let totalPairCount = 0;
  // sort socks. Makes it so a single for loop can be used for counting
  const sortedSocks = ar.sort();
  //   console.log(n, ar);
  // for each sock in the array of sorted socks, find the number of each unique sock, and divide by 2 to calculate pairs.
  for (let i = 0; i < sortedSocks.length; i++) {
    const sock = sortedSocks[i];
    // check if the current sock in the array is the same as the sock that is being counted.
    if (sock === sockToCount) {
      // if the sock is the same, increment the count for the current sock.
      sockCount++;
    } else {
      // if the sock is not the same, then we've reached the end of that sock since the socks are sorted.
      // -- now that we have the total count of that type of sock, check if there are pairs.
      // -- by dividing by 2 and rounding down, we get the total number of pairs for this type of sock
      const pairsOfcurrentSock = Math.floor(sockCount / 2);
      //   console.log(sockToCount, sockCount, pairsOfcurrentSock);
      // Add the number of pairs of the current sock to the total number of pairs
      totalPairCount = totalPairCount + pairsOfcurrentSock;
      // set the sock to count to the current sock, since it is now a new unique sock type
      sockToCount = sortedSocks[i];
      // reset the sock count. Count is one because this is the
      sockCount = 1;
    }
  }
  console.log(totalPairCount);
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
