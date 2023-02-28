/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';

const OuiIconLogoOpenSearch = ({ title, titleId, ...props }) => (
  <svg
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#005EB8"
      d="M61.7374 23.5C60.4878 23.5 59.4748 24.513 59.4748 25.7626C59.4748 44.3813 44.3813 59.4748 25.7626 59.4748C24.513 59.4748 23.5 60.4878 23.5 61.7374C23.5 62.987 24.513 64 25.7626 64C46.8805 64 64 46.8805 64 25.7626C64 24.513 62.987 23.5 61.7374 23.5Z"
    />
    <path
      fill="#003B5C"
      d="M48.0814 38C50.2572 34.4505 52.3615 29.7178 51.9475 23.0921C51.0899 9.36725 38.6589 -1.04463 26.9206 0.0837327C22.3253 0.525465 17.6068 4.2712 18.026 10.9805C18.2082 13.8961 19.6352 15.6169 21.9544 16.9399C24.1618 18.1992 26.9978 18.9969 30.2128 19.9011C34.0962 20.9934 38.6009 22.2203 42.063 24.7717C46.2125 27.8295 49.0491 31.3743 48.0814 38Z"
    />
    <path
      fill="#005EB8"
      d="M3.91861 14C1.74276 17.5495 -0.361506 22.2822 0.0524931 28.9079C0.910072 42.6327 13.3411 53.0446 25.0794 51.9163C29.6747 51.4745 34.3932 47.7288 33.974 41.0195C33.7918 38.1039 32.3647 36.3831 30.0456 35.0601C27.8382 33.8008 25.0022 33.0031 21.7872 32.0989C17.9038 31.0066 13.3991 29.7797 9.93694 27.2283C5.78746 24.1704 2.95092 20.6257 3.91861 14Z"
    />
  </svg>
);

export const icon = OuiIconLogoOpenSearch;
