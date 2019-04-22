import { TplayStateStr, TplayId, TplayModelStr, Tplaylist, TentireEventCallback, TEvent, TonEvent, Iconfig, Ieventcallback, IreturnParams, IsetPlaylist } from './audio.d';
export declare class AudioH5 {
    isInit: boolean;
    audioH5: HTMLAudioElement | undefined | void;
    constructor(config: Iconfig);
    readonly duration: number;
    readonly networkState: number;
    readonly playlists: Tplaylist | Array<void>;
    readonly playid: TplayId;
    readonly playstate: TplayStateStr | null;
    init(config: Iconfig): IreturnParams | void;
    play(): TplayId | void;
    pause(): TplayId | void;
    toggle(): TplayId | void;
    cut(): IreturnParams | void;
    pick(playId: number): IreturnParams | void;
    load(): TplayId | void;
    private seekValue;
    private metaDataLoaded;
    seek(val?: number): number | void;
    rate(val?: number): number | void;
    volume(val?: number): number | void;
    mute(bool?: boolean): boolean | void;
    stop(forbidEvent?: boolean): TplayId | void;
    unload(forbidEvent?: boolean): void;
    model(model?: TplayModelStr): TplayModelStr | void;
    on(event: TEvent | TonEvent, cb: TentireEventCallback): boolean;
    off(event: TEvent | TonEvent, cb?: TentireEventCallback): boolean;
    once(event: TEvent | TonEvent, cb: TentireEventCallback): boolean;
    playlist(data: IsetPlaylist): IreturnParams | void;
    private config;
    private playState;
    private debug;
    private logLevel;
    private idCounter;
    private lockQueue;
    private playLocker;
    private playErrLocker;
    private lockTags;
    private playId;
    private playModel;
    private playIndex;
    private prevPlayIndex;
    private playList;
    private buffered;
    private eventController;
    private eventMethods;
    private _initial;
    private _createAudio;
    private _srcAssemble;
    private _updateConfig;
    private _returnParams;
    private _abortLoad;
    private _setPlayState;
    private _setPlayIndex;
    private _setPlayId;
    private _handlePlayList;
    private _resetPlayList;
    private _cut;
    protected onplay: Ieventcallback | Object | null | undefined;
    protected onpause: Ieventcallback | Object | null | undefined;
    protected onstop: Ieventcallback | Object | null | undefined;
    protected onend: Ieventcallback | Object | null | undefined;
    protected onfinish: Ieventcallback | Object | null | undefined;
    protected onload: Ieventcallback | Object | null | undefined;
    protected onunload: Ieventcallback | Object | null | undefined;
    protected oncanplay: Ieventcallback | Object | null | undefined;
    protected oncanplaythrough: Ieventcallback | Object | null | undefined;
    protected onprogress: Ieventcallback | Object | null | undefined;
    protected onvolume: Ieventcallback | Object | null | undefined;
    protected onseeking: Ieventcallback | Object | null | undefined;
    protected onseeked: Ieventcallback | Object | null | undefined;
    protected onrate: Ieventcallback | Object | null | undefined;
    protected ontimeupdate: Ieventcallback | Object | null | undefined;
    protected onloaderror: Ieventcallback | Object | null | undefined;
    protected onplayerror: Ieventcallback | Object | null | undefined;
    protected oncut: Ieventcallback | Object | null | undefined;
    protected onpick: Ieventcallback | Object | null | undefined;
    private _onEvent;
    private _offEvent;
    private _fireEventQueue;
    private isTriggerEnd;
    private _registerEvent;
    private _unregisterEvent;
    private _blockEvent;
    private _triggerEventController;
    private _bindEvent;
    private _removeEvent;
    private _playLockQueue;
    private _commonLock;
    private _autocut;
    protected _checkType(element: any, type: string, logErr?: boolean): boolean;
    protected _checkInit(): boolean;
    protected _log(detail: string | Object | Array<any>): void;
    protected _logInfo(info: string | Object | Array<any>): void;
    protected _logWarn(warn: string | Object | Array<any>): void;
    protected _logErr(error: string | Object | Array<any>): void;
    protected _logOptimize(msg: string | Object, method: 'log' | 'info' | 'warn' | 'error'): void;
}
export default AudioH5;
