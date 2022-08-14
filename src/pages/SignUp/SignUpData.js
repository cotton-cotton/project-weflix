export const SignUpData = [
  {
    id: 'name',
    name: 'userName',
    placeholder: '이름',
    type: 'text',
    message: '1자 이상 입력하세요.',
  },
  {
    id: 'email',
    name: 'userEmail',
    placeholder: '이메일(ID)',
    type: 'text',
    message: '1자 이상 입력하세요.',
    validation: '올바른 이메일 형식을 사용하세요',
  },
  {
    id: 'password',
    name: 'userPassword',
    placeholder: '비밀번호',
    type: 'text',
    message: '1자 이상 입력하세요.',
    validation: '대소문자, 특수문자 1자이상 포함해야됩니다.',
  },
  {
    id: 'name',
    name: 'passwordConfirm',
    placeholder: '비밀번호 확인',
    type: 'text',
    message: '1자 이상 입력하세요.',
    validation: '비밀번호와 일치하지 않습니다.',
  },
];
