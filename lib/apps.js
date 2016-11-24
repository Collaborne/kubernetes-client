'use strict';

const ApiGroup = require('./api-group');

class Apps extends ApiGroup {
  constructor(options) {
    const genericTypes = [
      'petsets'
    ];
    options = Object.assign({}, options, {
      path: 'apis/apps',
      version: options.version || 'v1alpha1',
      genericTypes: genericTypes
    });
    super(options);
  }
}

module.exports = Apps;
