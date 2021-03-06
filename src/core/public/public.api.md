## API Report File for "kibana"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as CSS from 'csstype';
import { default } from 'react';
import { IconType } from '@elastic/eui';
import { Observable } from 'rxjs';
import * as PropTypes from 'prop-types';
import * as Rx from 'rxjs';
import { Toast } from '@elastic/eui';

// @public (undocumented)
export interface ApplicationSetup {
    // Warning: (ae-forgotten-export) The symbol "App" needs to be exported by the entry point index.d.ts
    registerApp(app: App): void;
    // Warning: (ae-forgotten-export) The symbol "LegacyApp" needs to be exported by the entry point index.d.ts
    // 
    // @internal
    registerLegacyApp(app: LegacyApp): void;
}

// Warning: (ae-missing-release-tag) "ApplicationStart" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
// 
// @public (undocumented)
export interface ApplicationStart {
    // Warning: (ae-forgotten-export) The symbol "CapabilitiesStart" needs to be exported by the entry point index.d.ts
    // 
    // (undocumented)
    availableApps: CapabilitiesStart['availableApps'];
    // (undocumented)
    capabilities: CapabilitiesStart['capabilities'];
    // (undocumented)
    mount: (mountHandler: Function) => void;
}

// @public
export interface BasePathSetup {
    addToPath(path: string): string;
    get(): string;
    removeFromPath(path: string): string;
}

// @public
export type BasePathStart = BasePathSetup;

// @public
export interface Capabilities {
    [key: string]: Record<string, boolean | Record<string, boolean>>;
    catalogue: Record<string, boolean>;
    management: {
        [sectionId: string]: Record<string, boolean>;
    };
    navLinks: Record<string, boolean>;
}

// @public (undocumented)
export interface ChromeBadge {
    // (undocumented)
    iconType?: IconType;
    // (undocumented)
    text: string;
    // (undocumented)
    tooltip: string;
}

// @public (undocumented)
export interface ChromeBrand {
    // (undocumented)
    logo?: string;
    // (undocumented)
    smallLogo?: string;
}

// @public (undocumented)
export interface ChromeBreadcrumb {
    // (undocumented)
    'data-test-subj'?: string;
    // (undocumented)
    href?: string;
    // (undocumented)
    text: string;
}

// @public (undocumented)
export type ChromeHelpExtension = (element: HTMLDivElement) => (() => void);

// @public (undocumented)
export interface ChromeNavLink {
    readonly active?: boolean;
    readonly baseUrl: string;
    readonly disabled?: boolean;
    readonly euiIconType?: string;
    readonly hidden?: boolean;
    readonly icon?: string;
    readonly id: string;
    readonly linkToLastSubUrl?: boolean;
    readonly order: number;
    readonly subUrlBase?: string;
    readonly title: string;
    readonly tooltip?: string;
    readonly url?: string;
}

// Warning: (ae-forgotten-export) The symbol "ChromeService" needs to be exported by the entry point index.d.ts
// 
// @public (undocumented)
export type ChromeSetup = ReturnType<ChromeService['setup']>;

// @public (undocumented)
export type ChromeStart = ReturnType<ChromeService['start']>;

// @internal (undocumented)
export interface CoreContext {
}

// @public
export interface CoreSetup {
    // (undocumented)
    application: ApplicationSetup;
    // (undocumented)
    basePath: BasePathSetup;
    // (undocumented)
    chrome: ChromeSetup;
    // (undocumented)
    fatalErrors: FatalErrorsSetup;
    // (undocumented)
    http: HttpSetup;
    // (undocumented)
    i18n: I18nSetup;
    // (undocumented)
    injectedMetadata: InjectedMetadataSetup;
    // (undocumented)
    notifications: NotificationsSetup;
    // (undocumented)
    uiSettings: UiSettingsSetup;
}

// @public
export interface CoreStart {
    // (undocumented)
    application: ApplicationStart;
    // (undocumented)
    basePath: BasePathStart;
    // (undocumented)
    chrome: ChromeStart;
    // (undocumented)
    http: HttpStart;
    // (undocumented)
    i18n: I18nStart;
    // (undocumented)
    injectedMetadata: InjectedMetadataStart;
    // (undocumented)
    notifications: NotificationsStart;
    // (undocumented)
    overlays: OverlayStart;
}

// @internal
export class CoreSystem {
    // Warning: (ae-forgotten-export) The symbol "Params" needs to be exported by the entry point index.d.ts
    constructor(params: Params);
    // (undocumented)
    setup(): Promise<{
        fatalErrors: FatalErrorsSetup;
    } | undefined>;
    // (undocumented)
    start(): Promise<void>;
    // (undocumented)
    stop(): void;
    }

// @public
export interface FatalErrorInfo {
    // (undocumented)
    message: string;
    // (undocumented)
    stack: string | undefined;
}

// @public
export interface FatalErrorsSetup {
    add: (error: string | Error, source?: string) => never;
    get$: () => Rx.Observable<FatalErrorInfo>;
}

// Warning: (ae-forgotten-export) The symbol "HttpService" needs to be exported by the entry point index.d.ts
// 
// @public (undocumented)
export type HttpSetup = ReturnType<HttpService['setup']>;

// @public (undocumented)
export type HttpStart = ReturnType<HttpService['start']>;

// @public
export interface I18nSetup {
    Context: ({ children }: {
        children: default.ReactNode;
    }) => JSX.Element;
}

// @public (undocumented)
export type I18nStart = I18nSetup;

// @internal (undocumented)
export interface InjectedMetadataParams {
    // (undocumented)
    injectedMetadata: {
        version: string;
        buildNumber: number;
        basePath: string;
        csp: {
            warnLegacyBrowsers: boolean;
        };
        vars: {
            [key: string]: unknown;
        };
        uiPlugins: Array<{
            id: PluginName;
            plugin: DiscoveredPlugin;
        }>;
        capabilities: Capabilities;
        legacyMetadata: {
            app: unknown;
            translations: unknown;
            bundleId: string;
            nav: LegacyNavLink[];
            version: string;
            branch: string;
            buildNum: number;
            buildSha: string;
            basePath: string;
            serverName: string;
            devMode: boolean;
            uiSettings: {
                defaults: UiSettingsState;
                user?: UiSettingsState;
            };
        };
    };
}

// @public
export interface InjectedMetadataSetup {
    // (undocumented)
    getBasePath: () => string;
    // (undocumented)
    getCapabilities: () => Capabilities;
    // (undocumented)
    getCspConfig: () => {
        warnLegacyBrowsers: boolean;
    };
    // (undocumented)
    getInjectedVar: (name: string, defaultValue?: any) => unknown;
    // (undocumented)
    getInjectedVars: () => {
        [key: string]: unknown;
    };
    // (undocumented)
    getKibanaBuildNumber: () => number;
    // (undocumented)
    getKibanaVersion: () => string;
    // (undocumented)
    getLegacyMetadata: () => {
        app: unknown;
        translations: unknown;
        bundleId: string;
        nav: LegacyNavLink[];
        version: string;
        branch: string;
        buildNum: number;
        buildSha: string;
        basePath: string;
        serverName: string;
        devMode: boolean;
        uiSettings: {
            defaults: UiSettingsState;
            user?: UiSettingsState | undefined;
        };
    };
    getPlugins: () => Array<{
        id: string;
        plugin: DiscoveredPlugin;
    }>;
}

// @public (undocumented)
export type InjectedMetadataStart = InjectedMetadataSetup;

// @public (undocumented)
export interface LegacyNavLink {
    // (undocumented)
    euiIconType?: string;
    // (undocumented)
    icon?: string;
    // (undocumented)
    id: string;
    // (undocumented)
    order: number;
    // (undocumented)
    title: string;
    // (undocumented)
    url: string;
}

// @public (undocumented)
export interface NotificationsSetup {
    // (undocumented)
    toasts: ToastsApi;
}

// @public (undocumented)
export type NotificationsStart = NotificationsSetup;

// Warning: (ae-missing-release-tag) "OverlayRef" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
// 
// @public (undocumented)
export interface OverlayRef {
    close(): Promise<void>;
    onClose: Promise<void>;
}

// @public (undocumented)
export interface OverlayStart {
    // Warning: (ae-forgotten-export) The symbol "React" needs to be exported by the entry point index.d.ts
    // 
    // (undocumented)
    openFlyout: (flyoutChildren: React.ReactNode, flyoutProps?: {
        closeButtonAriaLabel?: string;
        'data-test-subj'?: string;
    }) => OverlayRef;
    // (undocumented)
    openModal: (modalChildren: React.ReactNode, modalProps?: {
        closeButtonAriaLabel?: string;
        'data-test-subj'?: string;
    }) => OverlayRef;
}

// @public
export interface Plugin<TSetup, TStart, TPluginsSetup extends Record<string, unknown> = {}, TPluginsStart extends Record<string, unknown> = {}> {
    // (undocumented)
    setup: (core: PluginSetupContext, plugins: TPluginsSetup) => TSetup | Promise<TSetup>;
    // (undocumented)
    start: (core: PluginStartContext, plugins: TPluginsStart) => TStart | Promise<TStart>;
    // (undocumented)
    stop?: () => void;
}

// @public
export type PluginInitializer<TSetup, TStart, TPluginsSetup extends Record<string, unknown> = {}, TPluginsStart extends Record<string, unknown> = {}> = (core: PluginInitializerContext) => Plugin<TSetup, TStart, TPluginsSetup, TPluginsStart>;

// @public
export interface PluginInitializerContext {
}

// @public
export interface PluginSetupContext {
    // (undocumented)
    basePath: BasePathSetup;
    // (undocumented)
    chrome: ChromeSetup;
    // (undocumented)
    fatalErrors: FatalErrorsSetup;
    // (undocumented)
    http: HttpSetup;
    // (undocumented)
    i18n: I18nSetup;
    // (undocumented)
    notifications: NotificationsSetup;
    // (undocumented)
    uiSettings: UiSettingsSetup;
}

// @public
export interface PluginStartContext {
    // (undocumented)
    application: Pick<ApplicationStart, 'capabilities'>;
    // (undocumented)
    basePath: BasePathStart;
    // (undocumented)
    chrome: ChromeStart;
    // (undocumented)
    http: HttpStart;
    // (undocumented)
    i18n: I18nStart;
    // (undocumented)
    notifications: NotificationsStart;
    // (undocumented)
    overlays: OverlayStart;
}

export { Toast }

// @public (undocumented)
export type ToastInput = string | Pick<Toast, Exclude<keyof Toast, 'id'>>;

// @public (undocumented)
export class ToastsApi {
    // (undocumented)
    add(toastOrTitle: ToastInput): Toast;
    // (undocumented)
    addDanger(toastOrTitle: ToastInput): Toast;
    // (undocumented)
    addSuccess(toastOrTitle: ToastInput): Toast;
    // (undocumented)
    addWarning(toastOrTitle: ToastInput): Toast;
    // (undocumented)
    get$(): Rx.Observable<Toast[]>;
    // (undocumented)
    remove(toast: Toast): void;
    }

// @public (undocumented)
export class UiSettingsClient {
    // Warning: (ae-forgotten-export) The symbol "UiSettingsClientParams" needs to be exported by the entry point index.d.ts
    constructor(params: UiSettingsClientParams);
    get$(key: string, defaultOverride?: any): Rx.Observable<any>;
    get(key: string, defaultOverride?: any): any;
    getAll(): UiSettingsState;
    getSaved$(): Rx.Observable<{
        key: string;
        newValue: any;
        oldValue: any;
    }>;
    getUpdate$(): Rx.Observable<{
        key: string;
        newValue: any;
        oldValue: any;
    }>;
    getUpdateErrors$(): Rx.Observable<Error>;
    isCustom(key: string): boolean;
    isDeclared(key: string): boolean;
    isDefault(key: string): boolean;
    isOverridden(key: string): boolean;
    overrideLocalDefault(key: string, newDefault: any): void;
    remove(key: string): Promise<boolean>;
    set(key: string, val: any): Promise<boolean>;
    stop(): void;
    }

// @public (undocumented)
export type UiSettingsSetup = UiSettingsClient;

// @public (undocumented)
export interface UiSettingsState {
    // Warning: (ae-forgotten-export) The symbol "InjectedUiSettingsDefault" needs to be exported by the entry point index.d.ts
    // Warning: (ae-forgotten-export) The symbol "InjectedUiSettingsUser" needs to be exported by the entry point index.d.ts
    // 
    // (undocumented)
    [key: string]: InjectedUiSettingsDefault & InjectedUiSettingsUser;
}


// Warnings were encountered during analysis:
// 
// src/core/public/injected_metadata/injected_metadata_service.ts:49:7 - (ae-forgotten-export) The symbol "PluginName" needs to be exported by the entry point index.d.ts
// src/core/public/injected_metadata/injected_metadata_service.ts:50:7 - (ae-forgotten-export) The symbol "DiscoveredPlugin" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```
