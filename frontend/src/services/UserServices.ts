import { api } from "../api";

type AuthenticateUser = {
  email: string,
  password: string,
};

type ResponseAuthenticate = {
  token: string,
  username: string,
};

type RegisterUser = {
  name: string,
  email: string,
  password: string,
};

async function AuthenticateUserService(body: AuthenticateUser) {
  const { data } = await api.post<ResponseAuthenticate>('api/v1/login', body);
  return data;
};

async function RegisterUserService(body: RegisterUser) {
  await api.post('/api/v1/register', body);
}

export { AuthenticateUserService, RegisterUserService };
export type { RegisterUser };