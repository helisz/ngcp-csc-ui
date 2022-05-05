import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { date } from 'quasar'

import CallBlockingModule from './call-blocking'
import CallForwardingModule from './call-forwarding'
import CallModule from 'src/store/call'
import CallRecordingsModule from './call-recordings'
import CallSettingsModule from './call-settings'
import ConversationsModule from './conversations'

import PbxModule from './pbx'
import PbxSeatsModule from './pbx-seats'
import PbxGroupsModule from './pbx-groups'
import PbxDevicesModule from './pbx-devices'
import PbxCallQueuesModule from './pbx-callqueues'
import PbxSoundSetsModule from './pbx-soundsets'
import PbxMsConfigsModule from './pbx-ms-configs'
import PbxAutoAttendants from './pbx-auto-attendants'

import ReminderModule from './reminder'
import SpeedDialModule from './speed-dial'
import UserModule from './user'
import CommunicationModule from './communication'
import FaxModule from './fax'
import VoiceboxModule from './voicebox'
import DashboardModule from './dashboard'

import { INTERNAL_DATE_FORMAT_SLASH, INTERNAL_DATE_FORMAT_DASH, INTERNAL_DATE_FORMAT_DASH_HOUR } from 'src/constants'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            callBlocking: CallBlockingModule,
            callRecordings: CallRecordingsModule,
            call: CallModule,
            callSettings: CallSettingsModule,
            conversations: ConversationsModule,
            reminder: ReminderModule,
            speedDial: SpeedDialModule,
            user: UserModule,
            communication: CommunicationModule,
            fax: FaxModule,
            voicebox: VoiceboxModule,
            pbx: PbxModule,
            pbxSeats: PbxSeatsModule,
            pbxGroups: PbxGroupsModule,
            pbxDevices: PbxDevicesModule,
            pbxCallQueues: PbxCallQueuesModule,
            pbxSoundSets: PbxSoundSetsModule,
            pbxMsConfigs: PbxMsConfigsModule,
            callForwarding: CallForwardingModule,
            pbxAutoAttendants: PbxAutoAttendants,
            dashboard: DashboardModule
        },
        state: {
            route: null
        },
        getters: {
            conferenceId (state) {
                return _.get(state, 'route.params.id', null)
            },
            conferenceUrl (state) {
                // eslint-disable-next-line no-unused-vars
                const id = _.get(state, 'route.params.id', null)
                return window.location.href
            },
            hasConferenceId (state, getters) {
                return getters.conferenceId !== null && getters.conferenceId !== undefined
            },
            isCallForward (state) {
                return _.startsWith(_.get(state, 'route.path', ''), '/user/call-forward')
            },
            isCallBlocking (state) {
                return _.startsWith(_.get(state, 'route.path', ''), '/user/call-blocking')
            },
            isPbxConfiguration (state) {
                return _.startsWith(_.get(state, 'route.path', ''), '/user/pbx-configuration')
            },
            isHome (state) {
                return _.get(state, 'route.path', '') === '/user/home'
            },
            getCurrentFormattedDateWithDash () {
                const currentDate = Date.now()
                return date.formatDate(currentDate, INTERNAL_DATE_FORMAT_DASH)
            },
            getCurrentFormattedDateWithDashAndHour () {
                const currentDate = new Date()
                currentDate.setHours(0, 0, 0, 0)
                return date.formatDate(currentDate, INTERNAL_DATE_FORMAT_DASH_HOUR)
            },
            getCurrentFormattedDateWithSlash () {
                const currentDate = Date.now()
                return date.formatDate(currentDate, INTERNAL_DATE_FORMAT_SLASH)
            }
        },
        mutations: {
            routeChanged (state, route) {
                state.route = route
            }
        },
        actions: {
            async reloadLanguageRelatedData (context) {
                /* NOTE: this action will be called after UI language change. So you could place here actions calls for
                   refreshing language related data in the store */

                if (Object.keys(context.state.callSettings.preferencesDefs).length > 0) {
                    // preferencesDefs were loaded already so we need updated them for a new language
                    await context.dispatch('callSettings/loadPreferencesDefsAction')
                }
            }
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })

    return Store
}
