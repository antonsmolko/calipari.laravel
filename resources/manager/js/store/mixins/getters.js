export const uniqueFieldMixin = (items, fieldName, value) => {
    return items ? !!items.find(item => item[fieldName].toLowerCase() === value.toLowerCase()) : true;
};

export const uniqueFieldEditMixin = (items, fieldName, value, id) => {
    return items
        ? !!items.find(item => {
            if(+item.id !== +id) {
                return item[fieldName].toLowerCase() === value.toLowerCase();
            }
        })
        : true;
}
