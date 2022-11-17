# Turborepo starter with pnpm

## Core libaries
- @reduxjs/toolkit
- @tanstack/react-query
- react-hook-form, react-number-format
- @tanstack/react-table
- react-i18next
- use-immer
- react-hot-toast
- react-use
- zustand
- react-registry

## Extra libraries
- long-press-event
- lightGallery
- react-dropzone
- mobile-detect
- react-window
- downshift
- flatpickr
- geojson-validation
- react-intersection-observer
- react-sortable-tree
- react-spaces
- react-spring-bottom-sheet
- simple-zustand-devtools
- urijs

## My libraries
- [@ttungbmt/ts-utils]()
- [@ttungbmt/react-hooks]()
- [@ttungbmt/redux-form]()
- [@ttungbmt/redux-leaflet]()
- [@ttungbmt/redux-mapbox]()
- [@ttungbmt/ts-geom-utils]()
- [@ttungbmt/react-event-emitter]()
- [@ttungbmt/mui-query-list]()
- [@ttungbmt/tree-js]()

## Form setup
- support api
- sync values outside form
- support format-load
- size, classes
- ref (load, update, data, validate)
- initialValues
- support dispatch and update form
- support endpoint
- support format data, format value
- support async rules, depend rules, conditional rules
- support function rule
- support condition render

## Common hooks
- useDebounce
- useList
- useMap
- useToggle
- useUpdateEffect
- useIsomorphicLayoutEffect
- useDeepCompareEffect
- useEnsuredForwardedRef

## Remove folders

```shell
# Linux
# Method 1
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
# Method 2
npx rimraf ./**/.node_modules

# Windows
FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" rm -rf "%d"

```