const API_BASE = '';

type RequestOptions = RequestInit & {
  authToken?: string;
};

async function request(endpoint: string, options: RequestOptions = {}) {
  const { authToken, headers, ...rest } = options;

  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
      ...headers,
    },
    ...rest,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `API error ${response.status}`);
  }

  return response.json();
}
// This will be for routes to the Postgres DB
export const RDBserver_calls = {
  get<T = any>(endpoint: string, options?: RequestOptions): Promise<T> {
    return request(endpoint, { ...options, method: 'GET' });
  },
  
  post<T = any>(endpoint: string, body?: any, options?: RequestOptions): Promise<T> {
    return request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  put<T = any>(endpoint: string, body?: any, options?: RequestOptions): Promise<T> {
    return request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },

  delete<T = any>(endpoint: string, options?: RequestOptions): Promise<T> {
    return request(endpoint, { ...options, method: 'DELETE' });
  },
};