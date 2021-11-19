import { api } from "../api";

type AuthenticateUser = {
  email: string,
  password: string,
};

type ResponseAuthenticate = {
  token: string,
  username: string,
  admin: boolean,
};

type RegisterUser = {
  name: string,
  email: string,
  password: string,
  admin?: boolean,
};

type ResponseToGetAdministrators = {
  _id: string,
  name: string,
  email: string,
};

async function AuthenticateUserService(body: AuthenticateUser) {
  const { data } = await api.post<ResponseAuthenticate>('api/v1/login', body);
  return data;
};

async function RegisterUserService(body: RegisterUser) {
  await api.post('/api/v1/register', body);
}

async function getAdministratorsService() {
  const { data } = await api.get<ResponseToGetAdministrators[]>('/api/v1/administrators');
  return data;
};

export { 
  AuthenticateUserService, 
  RegisterUserService, 
  getAdministratorsService 
};
export type { RegisterUser };