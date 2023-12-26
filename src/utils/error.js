const ERROR_CODES = {
	INVALID_LOGIN_CREDENTIALS: 'Пользователь с таким емейл не был найден',
	auth: 'Пожалуйста войдите в систему'
}
export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}