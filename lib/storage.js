'use strict';

const ApiGroup = require('./api-group');

class Storage extends ApiGroup {
  constructor(options) {
    const genericTypes = [
      'storageclasses'
    ];
    options = Object.assign({}, options, {
      path: 'apis/storage.k8s.io',
      version: options.version || 'v1beta1',
      genericTypes: genericTypes
    });
    super(options);
  }
}

module.exports = Storage;
