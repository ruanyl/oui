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

import React from 'react';

import {
  OuiIcon,
  OuiKeyPadMenu,
  OuiKeyPadMenuItem,
} from '../../../../src/components';

export default () => (
  <OuiKeyPadMenu>
    <OuiKeyPadMenuItem label="Dashboard" href="#">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>

    <OuiKeyPadMenuItem
      label="Dashboard"
      href="#"
      betaBadgeLabel="Experimental"
      betaBadgeTooltipContent="This module is not GA. Please help us by reporting any bugs.">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>

    <OuiKeyPadMenuItem
      label="Dashboard"
      href="#"
      betaBadgeLabel="External"
      betaBadgeTooltipContent="This module is an external app."
      betaBadgeIconType="popout">
      <OuiIcon type="dashboardApp" size="l" />
    </OuiKeyPadMenuItem>
  </OuiKeyPadMenu>
);
