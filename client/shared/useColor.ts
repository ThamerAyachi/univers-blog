export default function useColor() {
	const colors: string[] = [
		"zinc",
		"red",
		"orange",
		"yellow",
		"lime",
		"green",
		"teal",
		"cyan",
		"blue",
		"indigo",
		"pink",
	];
	return colors[Math.floor(Math.random() * colors.length)];
}
