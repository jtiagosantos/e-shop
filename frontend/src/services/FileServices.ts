import { api } from "../api";

async function AddFileService(data: Object, product_id: string) {
  const file = await api.post(`api/v1/upload_file/${product_id}`, data);
  return file
};

async function DeleteFileService(file_id: string, token: string) {
  await api.delete(`api/v1/delete_file/${file_id}`, {
    headers: {
      'x-access-token': token
    }
  });
};


export { AddFileService, DeleteFileService };