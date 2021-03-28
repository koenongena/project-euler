import * as R from "ramda";

export const multiplyList = R.reduce(R.multiply, 1);