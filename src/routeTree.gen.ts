/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/App'

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/App',
  path: '/App',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/App': {
      id: '/App'
      path: '/App'
      fullPath: '/App'
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/App': typeof AppRoute
}

export interface FileRoutesByTo {
  '/App': typeof AppRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/App': typeof AppRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/App'
  fileRoutesByTo: FileRoutesByTo
  to: '/App'
  id: '__root__' | '/App'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRoute
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/App"
      ]
    },
    "/App": {
      "filePath": "App.tsx"
    }
  }
}
ROUTE_MANIFEST_END */