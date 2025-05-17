export const sleep = (sec: number) =>
	new Promise<void>((resolve) => setTimeout(resolve, sec));
