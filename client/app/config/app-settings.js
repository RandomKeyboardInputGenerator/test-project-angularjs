import _ from 'lodash';

class AppSettings {
    constructor() {
        this.PORTRAITS_DIRECTORY = 'assets/img/portraits/';
        this.DEFAULT_AVATAR = 'adelaide_hanscom1.png';
        this.FULL_VIEW_MODE_MIN_WIDTH = 830;
        this.DEFAULT_USER_ID = 1;
    
        this.loader = { 
            'text': 'Please wait. I\'m loading data...', 
            'data': {
                'dictionary': {'status': false}, 
                'questions': {'status': false}, 
                'comments': {'status': false}, 
                'users': {'status': false} 
            }
        };
    }
    
    getLoaderText() {
        return this.loader.text;
    }
    
    isDataLoaded() {
        return _.every(this.loader.data, 'status', true);
    }
    
    isDataNotLoaded() {
        return !this.isDataLoaded();
    }
    
    setLoadedStatus(resourceName) {
        _.set(this.loader.data, `${resourceName}.status`, true);
    }
}

export default AppSettings;