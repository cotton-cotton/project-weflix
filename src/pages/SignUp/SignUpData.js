export const SignUpData = [
  {
    id: 'name',
    name: 'userName',
    placeholder: '이름',
    type: 'text',
    message: { name: '1자 이상 입력하세요.' },
  },
  {
    id: 'email',
    name: 'userEmail',
    placeholder: '이메일(ID)',
    type: 'text',
    message: { email: '이메일 형식에 맞지 않습니다.' },
  },
  {
    id: 'password',
    name: 'userPassword',
    placeholder: '비밀번호',
    type: 'password',
    message: { password: '대소문자, 특수문자, 숫자 1자이상 포함해야됩니다.' },
  },
  {
    id: 'passwordConfirm',
    name: 'userPasswordConfirm',
    placeholder: '비밀번호 확인',
    type: 'password',
    message: { confirm: '비밀번호와 일치하지 않습니다.' },
  },
];
