export const api = {
  get: async <T>(url: string): Promise<T> => {
    throw new Error(`Implement GET ${url}`);
  },
};
