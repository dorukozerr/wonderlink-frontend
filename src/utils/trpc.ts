import { createTRPCReact } from '@trpc/react-query';

import { AppRouter } from '../../../wonderlink-backend/src/routers/_app';

export const trpc = createTRPCReact<AppRouter>();
