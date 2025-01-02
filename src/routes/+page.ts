import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const helloResponse = await fetch('/api/hello');
  const dateResponse = await fetch('/api/date');
  const hello = await helloResponse.json();
  const date = await dateResponse.json();

  return {
    message: hello.message,
    serverTime: date.serverTime,
  };
};
