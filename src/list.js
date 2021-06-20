import * as R from "ramda";

export const multiplyList = R.reduce(R.multiply, 1);

export const dropNth = (index, arr) => R.remove(index, 1, arr)