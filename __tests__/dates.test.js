const { DateTime } = require('luxon');
const { createTimeZone, isContributionInTimeRange } = require('..');

const oneHourInMinutes = 60;

describe('createTimeZone', () => {
    let localNow;
    let nowMillis;

    beforeEach(() => {
        localNow = DateTime.local();
        nowMillis = localNow.toMillis();
    });

    it('should default to UTC', () => {
        const tzForUndefined = createTimeZone(undefined);
        const tzForEmpty = createTimeZone('');
        expect(tzForUndefined.offset(nowMillis)).toEqual(0);
        expect(tzForEmpty.offset(nowMillis)).toEqual(0);
    });

    it('should allow "local" as an identifier', () => {
        const localTz = createTimeZone('local');
        const localTzOffsetMillis = localTz.offset(nowMillis);
        expect(localTzOffsetMillis).toEqual(localNow.offset);
    });

    it('should allow a legal timezone identifier', () => {
        const ramsesTz = createTimeZone('Etc/GMT+6');
        expect(ramsesTz.offset(nowMillis)).toEqual(-6 * oneHourInMinutes);
    });

    it('should throw for an illegal timezone identifier', () => {
        expect(() => {
            createTimeZone('illegal');
        }).toThrow();
    });
});

describe('isContributionInTimeRange', () => {
    it('should handle UTC/UTC cases', () => {
        const justBeforeStartString = '2020-07-09T01:59Z';
        const start = DateTime.fromISO('2020-07-09T02:00Z', { zone: 'Etc/UTC' });
        const justAfterStartString = '2020-07-09T02:01Z';
        const justBeforeEndString = '2020-07-10T01:59Z';
        const end = DateTime.fromISO('2020-07-10T02:00Z', { zone: 'Etc/UTC' });
        const justAfterEndString = '2020-07-10T02:01Z';

        expect(isContributionInTimeRange(justBeforeStartString, start, end)).toBeFalsy();
        expect(isContributionInTimeRange(justAfterStartString, start, end)).toBeTruthy();
        expect(isContributionInTimeRange(justBeforeEndString, start, end)).toBeTruthy();
        expect(isContributionInTimeRange(justAfterEndString, start, end)).toBeFalsy();
    });

    it('should handle start and end in non-UTC', () => {
        const justBeforeStartString = '2020-07-09T05:59Z';
        const start = DateTime.fromISO('2020-07-09', { zone: 'Etc/GMT+6' });
        const justAfterStartString = '2020-07-09T06:01Z';
        const justBeforeEndString = '2020-07-10T05:59Z';
        const end = DateTime.fromISO('2020-07-10', { zone: 'Etc/GMT+6' });
        const justAfterEndString = '2020-07-10T06:01Z';

        expect(isContributionInTimeRange(justBeforeStartString, start, end)).toBeFalsy();
        expect(isContributionInTimeRange(justAfterStartString, start, end)).toBeTruthy();
        expect(isContributionInTimeRange(justBeforeEndString, start, end)).toBeTruthy();
        expect(isContributionInTimeRange(justAfterEndString, start, end)).toBeFalsy();
    });
});
