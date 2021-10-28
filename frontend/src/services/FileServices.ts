import { api } from "../api";

async function AddFileService(data: Object, product_id: string) {
  const file = await api.post(`api/v1/upload_file/${product_id}`, data);
  return file
};

export { AddFileService };