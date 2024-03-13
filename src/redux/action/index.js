// 아이템 담기
export const addItem = (product) => {
	return {
		type: "ADDITEM",
		payload: product,
	};
};

// 아이템 삭제
export const delItem = (product) => {
	return {
		type: "DELITEM",
		payload: product,
	};
};
