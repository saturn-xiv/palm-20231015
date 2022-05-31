interface IPolicy {
  resourceType: string;
  resourceId?: number;
  operation: string;
}

export interface IApplicationState {
  policies: IPolicy[];
}

export const OPERATION_READ = 'read';
export const OPERATION_WRITE = 'write';
export const OPERATION_CREATE = 'create';
export const OPERATION_UPDATE = 'update';
export const OPERATION_REMOVE = 'remove';

export default function (initialState: IApplicationState) {
  const { policies } = initialState;

  return {
    can: (it: IPolicy): boolean => {
      for (var x of policies) {
        if (
          x.operation === it.operation &&
          x.resourceType === it.resourceType &&
          (x.resourceId === undefined || x.resourceId === it.resourceId)
        ) {
          return true;
        }
      }
      return false;
    },
  };
}
