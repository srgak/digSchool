const incorrectLogin = {
  message: 'Неправильные имя пользователя или пароль',
  status: 401
}

const userNotFound = {
  message: 'Пользователь не найден',
  status: 404
}

module.exports = {
  incorrectLogin,
  userNotFound
};