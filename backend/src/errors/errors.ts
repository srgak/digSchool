import { ErrorData } from "../interfaces/error"

const incorrectLogin: ErrorData = {
  message: 'Неправильные имя пользователя или пароль',
  status: 401
}

const elementNotFound: ErrorData = {
  message: 'Елемент не найден',
  status: 404
}

const userNotFound: ErrorData = {
  ...elementNotFound,
  message: 'Пользователь не найден'
}

export {
  incorrectLogin,
  elementNotFound,
  userNotFound
}