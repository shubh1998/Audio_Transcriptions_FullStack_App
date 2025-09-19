/* ==========================================================================
  LocalStorage / Session Storage / Cookies data constant
  ========================================================================== */
export const PANEL_UNIQUE_CONSTANT = Object.freeze({
  APP_INFO: 'audio_transcription_app_info'
})

/* ==========================================================================
    TOASTER / NOTIFICATION Types
  ========================================================================== */
export const TOASTER_TYPE = Object.freeze({
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
})

/* ==========================================================================
    Loader Types
  ========================================================================== */
export const LOADER_HANDLER_TYPES = Object.freeze({
  page: 'pageLoader',
  submit: 'submitButtonLoader',
  table: 'tableLoader',
  content: 'contentLoader'
})

/* ==========================================================================
    All the navigation route Paths
  ========================================================================== */
export const ROUTE_PATHS = Object.freeze({
  HOME: '/',
  CREATE_TRANSCRIPTION: '/create-transcription',
  LIST_TRANSCRIPTIONS: '/list-transcription'
})

/* ==========================================================================
  Regex Expression constants
========================================================================== */
export const REGEX_EXPRESSION = Object.freeze({
  // must contain at least one digit, one uppercase, one lowercase character, one special symbol
  SPACE_SHOULD_NOT_CONTAIN: /^(\S+$)/g
})

/* ==========================================================================
  HTTP Method Types
========================================================================== */
export const METHOD_TYPES = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch'
}
