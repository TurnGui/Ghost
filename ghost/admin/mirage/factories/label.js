import moment from 'moment-timezone';
import {Factory} from 'miragejs';

export default Factory.extend({
    createdAt() { return moment.utc().toISOString(); },
    name(i) { return `Label ${i}`; },
    slug(i) { return `label-${i}`; },
    updatedAt() { return moment.utc().toISOString(); },
    count() {
        // this gets updated automatically by the label serializer
        return {members: 0};
    }
});
