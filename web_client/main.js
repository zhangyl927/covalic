import events from 'girder/events';
import router from 'girder/router';
import { exposePluginConfig } from 'girder/utilities/PluginUtils';

exposePluginConfig('covalic', 'plugins/covalic/config');

import ConfigView from './views/ConfigView';
router.route('plugins/covalic/config', 'covalicConfig', function () {
    events.trigger('g:navigateTo', ConfigView);
});
