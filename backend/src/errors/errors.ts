import { ErrorData } from "../interfaces/error"

const incorrectLogin: ErrorData = {
  message: 'Неправильные имя пользователя или пароль',
  status: 401
}

const userNotFound: ErrorData = {
  message: 'Пользователь не найден',
  status: 404
}

export {
  incorrectLogin,
  userNotFound
}