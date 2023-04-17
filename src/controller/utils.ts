/* eslint-disable @typescript-eslint/no-explicit-any */
export function bindMethods<T extends Record<string, any>>(target: T): T {
	Object.getOwnPropertyNames(Object.getPrototypeOf(target))
		.filter((prop: keyof T): prop is keyof T & string => typeof target[prop] === 'function')
		.forEach((prop: keyof T) => {
			const method = target[prop];
			if (typeof method === 'function') {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call
				target[prop] = method.bind(target) as (typeof method & ThisParameterType<typeof method>);
			}
		});

	return target;
}
