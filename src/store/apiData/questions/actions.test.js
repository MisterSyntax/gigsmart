import {
    myEvent,
    MY_EVENT_NAME,
} from './actions';

describe('myEvent', () => {
    todo('does a thing', () => {
        expect(myEvent()).toEqual({
            type: MY_EVENT_NAME,
        });
    });
});
