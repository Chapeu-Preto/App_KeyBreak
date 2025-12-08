/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/game`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/success`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/welcome`; params?: Router.UnknownInputParams; } | { pathname: `/src/styles/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/game`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/success`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/welcome`; params?: Router.UnknownOutputParams; } | { pathname: `/src/styles/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/src/screens/game${`?${string}` | `#${string}` | ''}` | `/src/screens${`?${string}` | `#${string}` | ''}` | `/src/screens/success${`?${string}` | `#${string}` | ''}` | `/src/screens/welcome${`?${string}` | `#${string}` | ''}` | `/src/styles/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/game`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/success`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/welcome`; params?: Router.UnknownInputParams; } | { pathname: `/src/styles/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
