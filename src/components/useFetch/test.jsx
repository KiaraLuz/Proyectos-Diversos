import { useFecth } from ".";

export function useFecthHookTest() {
  const { data, error, pending } = useFecth();

  return (
    <div>
      <h1>Use Fetch Hook</h1>
    </div>
  );
}
