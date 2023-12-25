const ERROR_CODES = {
	INVALID_LOGIN_CREDENTIALS: 'Пользователь с таким емейл не был найден'
}
export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}