export const GET = async () => {
  return new Response(
    JSON.stringify({ message: 'Hello from SvelteKit Endpoint!' }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    }
  );
};
