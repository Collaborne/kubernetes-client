'use strict';

const ApiGroup = require('./api-group');

class Batch extends ApiGroup {
  constructor(options) {
    const genericTypes = [
      'scheduledjobs'
    ];
    options = Object.assign({}, options, {
      path: 'apis/batch',
      version: options.version || 'v2alpha1',
      genericTypes: genericTypes
    });
    super(options);
  }
}

module.exports = Batch;
