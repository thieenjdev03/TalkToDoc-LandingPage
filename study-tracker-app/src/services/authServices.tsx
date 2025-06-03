interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const usersKey = 'study-tracker-users'; // lưu users localStorage

function getUsers(): User[] {
  const users = localStorage.getItem(usersKey);
  return users ? JSON.parse(users) : [];
}

function saveUsers(users: User[]) {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

export async function register(user: Omit<User, 'id'>): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();

      if (users.find(u => u.email === user.email)) {
        reject(new Error('Email đã được đăng ký'));
        return;
      }

      const newUser = { ...user, id: Date.now().toString() };
      users.push(newUser);
      saveUsers(users);
      resolve(newUser);
    }, 500);
  });
}

export async function login(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Email hoặc mật khẩu không đúng'));
      }
    }, 500);
  });
}