'use strict';

import { RequestState } from '../common'

export default {
    pilot: null,
    groups: {},
    groupsOrdered: [],
    seats: {},
    seatsOrdered: [],
    numbers: [],
    numbersMap : {},
    devicesOrdered: [],
    devices: {},
    profilesOrdered: [],
    profiles: {},
    modelsOrdered: [],
    models: {},
    listState: RequestState.initiated,
    listError: null,
    listLoadingSilently: false,
    listCurrentPage: 1,
    listLastPage: null,
    addState: RequestState.initiated,
    addError: null,
    addItem: null,
    updateState: RequestState.initiated,
    updateError: null,
    updateItem: null,
    removeState: RequestState.initiated,
    removeError: null,
    removeItem: null,
    deviceStates: {},
    deviceErrors: {},
    deviceRemoved: null,
    lastAddedGroup: null,
    lastRemovedGroup: null,
    lastAddedSeat: null,
    lastRemovedSeat: null,
    lastUpdatedField: null,
    updateAliasNumbersState: RequestState.initiated,
    updateAliasNumbersItem: null,
    updateGroupsAndSeatsState: RequestState.initiated,
    updateGroupsAndSeatsItem: null,
    groupsAndSeats: [],
    groupsAndSeatsState: RequestState.initiated,
    groupsAndSeatsError: null,
    updatedDeviceKey: null
}
