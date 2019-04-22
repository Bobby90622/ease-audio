import AudioCtx from './audio_ctx';
import AudioH5 from './audio_h5';
import { Iconfig, IsetPlaylist, TEaseAudioMethod, IAudio } from './audio.d';
export declare class EaseAudio {
    audio: AudioH5 | AudioCtx | IAudio;
    init: TEaseAudioMethod;
    play: TEaseAudioMethod;
    pause: TEaseAudioMethod;
    toggle: TEaseAudioMethod;
    cut: TEaseAudioMethod;
    pick: TEaseAudioMethod;
    load: TEaseAudioMethod;
    seek: TEaseAudioMethod;
    rate: TEaseAudioMethod;
    volume: TEaseAudioMethod;
    mute: TEaseAudioMethod;
    stop: TEaseAudioMethod;
    unload: TEaseAudioMethod;
    on: TEaseAudioMethod;
    off: TEaseAudioMethod;
    once: TEaseAudioMethod;
    model: TEaseAudioMethod;
    constructor(config: Iconfig);
    readonly duration: number;
    readonly playState: "loaderror" | "playerror" | "loading" | "playing" | "paused" | "stopped" | "ended" | "finished" | "unloaded" | "loaded" | null;
    readonly playId: number;
    readonly playingData: {};
    playlist: IsetPlaylist;
    readonly networkState: number;
    private _createAudio;
}
export default EaseAudio;
