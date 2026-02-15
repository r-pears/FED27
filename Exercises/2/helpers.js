const isValidNumber = value => {
    if (value == null || value.toString().trim() === '') return false;
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
};

export { isValidNumber };
