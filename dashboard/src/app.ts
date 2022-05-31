import { IApplicationState } from '@/access';

export async function getInitialState(): Promise<IApplicationState> {
  // const data = await fetchXXX();
  console.log('init get current user');
  return Promise.resolve({
    policies: [],
  });
}
