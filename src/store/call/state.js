
import {
    CallState
} from 'src/store/call/common'

export default {
    connectionError: null,
    callEnabled: false,
    endedReason: null,
    callState: CallState.input,
    number: '',
    numberInput: '',
    localMediaStream: null,
    remoteMediaStream: null,
    caller: false,
    callee: false,
    microphoneEnabled: true,
    holdEnabled: false,
    cameraEnabled: false,
    screenEnabled: false,
    remoteAudioEnabled: true,
    remoteVideoEnabled: true,
    maximized: false,
    dialpadOpened: false
}
