import React from "react";

import { rem } from "polished";

import Icon from "./Icon";

import type { IconProps } from "@_types/icon-type";

const TwitterIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon {...props} type="stroke" strokeWidth={rem(1.5)}>
    <svg
      id="twitter"
      xmlns="http://www.w3.org/2000/svg"
      width="12.843"
      height="10.435"
      viewBox="0 0 12.843 10.435"
    >
      <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
        <path
          id="Path_25"
          data-name="Path 25"
          d="M12.843,49.235a5.489,5.489,0,0,1-1.517.416A2.618,2.618,0,0,0,12.485,48.2a5.262,5.262,0,0,1-1.67.637,2.633,2.633,0,0,0-4.555,1.8,2.711,2.711,0,0,0,.061.6A7.453,7.453,0,0,1,.894,48.48,2.634,2.634,0,0,0,1.7,52a2.6,2.6,0,0,1-1.19-.324V51.7a2.645,2.645,0,0,0,2.11,2.587,2.628,2.628,0,0,1-.69.087,2.328,2.328,0,0,1-.5-.045,2.658,2.658,0,0,0,2.46,1.834A5.291,5.291,0,0,1,.63,57.29,4.932,4.932,0,0,1,0,57.254a7.413,7.413,0,0,0,4.039,1.182,7.442,7.442,0,0,0,7.494-7.493c0-.116,0-.229-.01-.34A5.253,5.253,0,0,0,12.843,49.235Z"
          transform="translate(0 -48)"
          fill="transparent"
        />
      </g>
    </svg>
  </Icon>
));

export default TwitterIcon;
