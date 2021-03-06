/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { resolve } from 'path';
import { Server } from 'hapi';

import { i18n } from '@kbn/i18n';
import { initServerWithKibana } from './server/kibana.index';

export const APP_ID = 'siem';
export const APP_NAME = 'SIEM';
export const DEFAULT_INDEX_KEY = 'siem:defaultIndex';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function siem(kibana: any) {
  return new kibana.Plugin({
    id: APP_ID,
    configPrefix: 'xpack.siem',
    publicDir: resolve(__dirname, 'public'),
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        description: 'Explore your SIEM App',
        main: 'plugins/siem/app',
        euiIconType: 'securityAnalyticsApp',
        title: APP_NAME,
        listed: false,
        url: `/app/${APP_ID}`,
      },
      home: ['plugins/siem/register_feature'],
      links: [
        {
          description: 'Explore your SIEM App',
          euiIconType: 'securityAnalyticsApp',
          id: 'siem',
          order: 9000,
          title: APP_NAME,
          url: `/app/${APP_ID}`,
        },
      ],
      uiSettingDefaults: {
        [DEFAULT_INDEX_KEY]: {
          name: i18n.translate('xpack.siem.uiSettings.defaultIndexLabel', {
            defaultMessage: 'Default index',
          }),
          value: ['auditbeat-*', 'filebeat-*', 'packetbeat-*', 'winlogbeat-*'],
          description: i18n.translate('xpack.siem.uiSettings.defaultIndexDescription', {
            defaultMessage: 'Default Elasticsearch index to search',
          }),
          category: ['siem'],
          requiresPageReload: true,
        },
      },
    },
    init(server: Server) {
      initServerWithKibana(server);
    },
  });
}
