export const YEARS_OPTIONS = Array(10).fill(1)?.map((i, index) => ({ label: ++index, value: ++index, key: index }));
export const MONTHS_OPTIONS = Array(12).map((i, index) => ({ label: index++, value: index++, key: index }));
export const DAYS_OPTIONS = Array(31).map((i, index) => ({ label: index++, value: index++, key: index }));