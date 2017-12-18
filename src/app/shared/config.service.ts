

import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    public config = {};

    setCityId(value) {
        this.config['cityId'] = value;
    }

    setCityName(value) {
        this.config['cityName'] = value;
    }

    getConfig() {
        return this.config;
    }
}
