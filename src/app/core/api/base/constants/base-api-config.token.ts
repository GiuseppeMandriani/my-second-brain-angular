import { InjectionToken } from '@angular/core';

export const API_URLS = new InjectionToken<Record<string, string>>('API_URLS', {
  providedIn: 'root',
  factory: () => ({
    discogs: 'https://api.discogs.com/',
    users: 'https://jsonplaceholder.typicode.com/users',
    localTodo: 'http://localhost:3000'
  }),
});
