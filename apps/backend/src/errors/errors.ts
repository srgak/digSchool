import { ErrorData } from "../interfaces/error"

export const incorrectLogin: ErrorData = {
  message: 'Неправильные имя пользователя или пароль',
  status: 401
}

export const elementNotFound: ErrorData = {
  message: 'Елемент не найден',
  status: 404
}

export const userNotFound: ErrorData = {
  ...elementNotFound,
  message: 'Пользователь не найден'
}

export const invalidToken: ErrorData = {
  message: 'Некорректный токен',
  status: 401
}