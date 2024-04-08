const splitCamelCaseToString = (s: string) => s.split(/(?=[A-Z])/).join(' ').toUpperCase();

export default splitCamelCaseToString;
