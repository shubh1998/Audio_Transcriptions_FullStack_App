import React, { memo } from 'react'
import { LOADER_HANDLER_TYPES } from 'constants/index'
import { PulseLoader, ScaleLoader, FadeLoader } from 'react-spinners'

const Loader = ({ variant, loaderColor = '#C45856', loaderSize = 80 }) => {
  switch (variant) {
    case LOADER_HANDLER_TYPES.content:
      return <FadeLoader color={loaderColor} size={loaderSize} />

    case LOADER_HANDLER_TYPES.table:
      return <ScaleLoader color={loaderColor} size={loaderSize} />

    case LOADER_HANDLER_TYPES.submit:
      return <PulseLoader color={loaderColor} size={loaderSize} />

    default:
      return <ScaleLoader color={loaderColor} size={loaderSize} />
  }
}

export default memo(Loader)
