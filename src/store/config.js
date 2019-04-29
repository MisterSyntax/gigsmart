import config from '../config.json';

const configReducer = () => ({
    ...config,
});

export default configReducer;
