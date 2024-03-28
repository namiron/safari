



export const fotFunction = (count, array, component) => {
	const newArray = [...array];

	for (let i = 0; i < count; i++) {
		newArray.push(component);
	}

	return newArray;
}
