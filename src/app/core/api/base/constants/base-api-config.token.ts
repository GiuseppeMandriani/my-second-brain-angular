import { InjectionToken } from '@angular/core';

export const API_URLS = new InjectionToken<Record<string, string>>('API_URLS', {
  providedIn: 'root',
  factory: () => ({
    discogs: 'https://api.discogs.com/',
    users: 'https://jsonplaceholder.typicode.com/users',
    // localTodo: 'http://localhost:3000',
    // localProducts: 'http://localhost:3000',
    // localConfigs: 'http://localhost:3000',
    localTodo: 'https://json-server-api-v7rs.onrender.com', //SERVER HOST
    localProducts: 'https://json-server-api-v7rs.onrender.com', //SERVER HOST
    localConfigs: 'https://json-server-api-v7rs.onrender.com', //SERVER HOST
  }),
});
