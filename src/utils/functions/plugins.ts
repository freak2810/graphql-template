import { ApolloServerOptions } from '@apollo/server';

import { Context } from '../types/context';
import { logger } from './logger';

export const plugins: ApolloServerOptions<Context>['plugins'] = [
  {
    requestDidStart: async (context) => {
      if (context.request.operationName === 'IntrospectionQuery') return;

      logger(context.request.query, context.request);
    },
  },
];
