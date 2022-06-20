import { PropsWithChildren } from 'react';

export type ProtectedRouteProps = {
  isAllowed: boolean;
  redirectTo?: string;
} & PropsWithChildren;
