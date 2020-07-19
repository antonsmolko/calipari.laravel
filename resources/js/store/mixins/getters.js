export const uniqueFieldMixin = (items, fieldName, value) => {
    return !items.length || !items.some((item) => (
        item[fieldName].toString().toLowerCase() === value.toString().toLowerCase())
    );
};

export const uniqueFieldEditMixin = (items, fieldName, value, id) => {
    return !items.length || !items.some((item) => {
        if (+item.id !== +id) {
            return item[fieldName].toString().toLowerCase() === value.toString().toLowerCase();
        }
    });
};
