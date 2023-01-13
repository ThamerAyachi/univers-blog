/**
 * formatDate - format date from "YY/MM/DD" to m d
 * @param date string date format "YY/MM/DD"
 * @returns string format m d
 */
export const formatDate = (date: string) => {
	const months: string[] = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const newDate: string[] = date.split("-");
	return `${months[+newDate[1] - 1]} ${newDate[2]}`;
};
