import { CreateUpdate } from 'tests/types/custom';

export const payloadCreateUpdate = (value: CreateUpdate) => {
    return {
        name: value.name,
        job: value.job,
    };
};
