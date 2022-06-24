import { IApplicationState } from './app';
import { IPermission } from './models/useAuthModel';

export default function (initialState: IApplicationState) {
  const { layout } = initialState;

  return {
    isAdministrator: (): boolean => {
      if (layout.currentUser?.isAdministrator) {
        return true;
      }
      return false;
    },
    can: (it: IPermission): boolean => {
      if (layout.currentUser) {
        if (layout.currentUser.isAdministrator) {
          return true;
        }

        for (var x of layout.currentUser.permissions) {
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
