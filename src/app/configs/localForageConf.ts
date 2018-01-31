import {NgModule} from "@angular/core";
import {NgForageConfig, NgForageModule, NgForageOptions} from "@ngforage/ngforage-ng4";

@NgModule({
  imports: [
      NgForageModule
  ]
})
export class localForageConfig {
    constructor(conf: NgForageConfig) {
      // Set the database name
      conf.name = 'foodieApp';

      // Set the store name (e.g. in IndexedDB this is the dataStore)
      conf.storeName = 'common';

      // Set default cache time to 5 minutes
      conf.cacheTime = 300000;

      // Set driver to local storage
      conf.driver = NgForageConfig.DRIVER_LOCALSTORAGE;

      // Set the driver to indexed db if available,
      // falling back to websql
      // falling back to local storage
      conf.driver = [
        NgForageConfig.DRIVER_INDEXEDDB,
        NgForageConfig.DRIVER_WEBSQL,
        NgForageConfig.DRIVER_LOCALSTORAGE
      ];

      // Set websql database size
      conf.size = 1024 * 1024 * 4;

      // Set DB version. Currently unused.
      conf.version = 2.0;

      // Configure in bulk
      const bulk: NgForageOptions = {
        version: 3.0,
        name: 'foodieApp'
      };
      conf.configure(bulk);
  }
}
