/**
=========================================================
* Know Your Plant MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base border styles for the Know Your Plant MUI.
 * You can add new border width, border color or border radius using this file.
 * You can customized the borders value for the entire Know Your Plant MUI using thie file.
 */

// Know Your Plant MUI Base Styles
import colors from "assets/theme/base/colors";

// Know Your Plant MUI Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey } = colors;

const borders = {
  borderColor: grey[300],

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(2),
    sm: pxToRem(4),
    md: pxToRem(8),
    lg: pxToRem(12),
    xl: pxToRem(16),
    xxl: pxToRem(24),
    section: pxToRem(160),
  },
};

export default borders;
