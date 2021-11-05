import { api } from "../api";

type AuthenticateUser = {
  email: string,
  password: string,
};

type ResponseAuthenticate = {
  token: string,
  username: string,
};

async function AuthenticateUserService(body: AuthenticateUser) {
  const { data } = await api.post<ResponseAuthenticate>('api/v1/login', body);
  return data;
};

export { AuthenticateUserService };