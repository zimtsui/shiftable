const sortMergeTwo = <T>(
	cmp: (x1: T, x2: T) => boolean,
) => function* (
	it1: Iterator<T>,
	it2: Iterator<T>,
	): Generator<T, void> {
		try {
			let r1 = it1.next();
			let r2 = it2.next();
			while (!r1.done || !r2.done) {
				if (r1.done) {
					yield r2.value;
					r2 = it2.next();
				} else if (r2.done) {
					yield r1.value;
					r1 = it1.next();
				} else if (cmp(r1.value, r2.value)) {
					yield r1.value;
					r1 = it1.next();
				} else {
					yield r2.value;
					r2 = it2.next();
				}
			}
		} finally {
			if (it1.return) it1.return();
			if (it2.return) it2.return();
		}
	}

export const sortMerge = <T>(
	cmp: (x1: T, x2: T) => boolean,
) => (...iterators: Iterator<T>[]) =>
		iterators.reduce(sortMergeTwo(cmp));
