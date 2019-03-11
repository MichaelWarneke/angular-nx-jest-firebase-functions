module.exports = {
  name: 'frontend-tabu',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/tabu/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
