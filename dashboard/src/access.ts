import { IApplicationState } from './app';
import { IPermission } from './models/useAuthModel';

export default function (initialState: IApplicationState) {
  const { currentUser } = initialState;

  return {
    isAdministrator: currentUser?.isAdministrator,
    can: (it: IPermission): boolean => {
      if (currentUser) {
        if (currentUser.isAdministrator) {
          return true;
        }
        for (var x of currentUser.permissions) {
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
