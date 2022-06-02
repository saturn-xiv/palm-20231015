import { IApplicationState } from './app';
import { IPolicy } from './models/useAuthModel';

export default function (initialState: IApplicationState) {
  const { currentUser } = initialState;

  return {
    isAdministrator: currentUser?.isAdministrator,
    can: (it: IPolicy): boolean => {
      if (currentUser) {
        if (currentUser.isAdministrator) {
          return true;
        }
        for (var x of currentUser.policies) {
          if (
            x.operation === it.operation &&
            x.resourceType === it.resourceType &&
            (x.resourceId === undefined || x.resourceId === it.resourceId)
          ) {
            return true;
          }
        }
      }
      return false;
    },
  };
}
