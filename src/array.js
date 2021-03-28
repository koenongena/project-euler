import R = require("ramda");

const equalsLength = (l: number) => (a) => {
    return (a || []).length === l;
};

const mapIndexed = R.addIndex(R.map);

const createPermutations = (a: unknown[]) => {
    if (a.length === 1) {
        return [a]
    }
    const _concatElementWithOtherPermutations = (v: any, index: number) => {
        const otherPermutations = createPermutations(R.remove(index, 1, a));
        return R.map(R.prepend(v), otherPermutations);
    };
    return R.unnest(mapIndexed(_concatElementWithOtherPermutations, a));
};

export const permutations: <T>(arr: T[]) => T[] = <T>(arr: T[]) => {
    return R.cond([
        [R.isNil, R.always([])],
        [R.isEmpty, R.always([])],
        [equalsLength(1), a => [a]],
        [R.T, () => createPermutations(arr)]
    ])(arr);
};