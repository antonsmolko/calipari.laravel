export const getFormatPrice = price => typeof price === 'number' && price > 0
    ? price.toLocaleString('ru-Ru', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    })
    : price

export const getArticle = (id) => {
    return id.toString().padStart(5, 0)
}

export const getFormatDate = (milliseconds, delimiter = '.') => {
    const date = new Date();

    const formatDate = [
        date.getDay().toString().padStart(2, '0'),
        date.getMonth().toString().padStart(2, '0'),
        date.getFullYear()
    ];

    return formatDate.join(delimiter);
}

export default {
    getFormatPrice,
    getArticle,
    getFormatDate
}
