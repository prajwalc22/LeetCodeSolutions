function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  let ans: number[] = new Array(n).fill(0);
  let zeros = 0;
  let zeroIdx;
  let product = 1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (zeros === 0) {
        zeroIdx = i;
      }
      zeros++;
      continue;
    }
    product = product * nums[i];
  }

  if (zeros === 1) {
    ans[zeroIdx] = product;
    return ans;
  }

  if (zeros >= 2) {
    return ans;
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      ans[i] = product / nums[i]
    }
  };

  return ans;
}

