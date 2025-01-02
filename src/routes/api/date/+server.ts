import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const now = new Date();
  return new Response(JSON.stringify({ serverTime: now.toISOString() }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
