/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment */
export function bindMethods<T extends Record<string, any>>(target: T): T {
	const boundMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(target))
		.filter(prop => typeof target[prop] === 'function')
		.map(prop => target[prop].bind(target));

	const boundTarget = {...target};
	boundMethods.forEach((boundMethod, index) => {
		const prop = Object.getOwnPropertyNames(Object.getPrototypeOf(target))[index];
		boundTarget[prop as keyof T] = boundMethod;
	});

	return boundTarget;
}
