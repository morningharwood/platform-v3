import { Roles } from '@workspace/core/src/roles.interface';


export interface User {
  uid: string;
  email: string;
  roles: Roles;
}
