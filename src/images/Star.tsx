
import React from "react";
import { SVGIconProps } from "./types";

export const Star = ({ color, ...props }: SVGIconProps) => (
	<svg version="1.1" id="Layer_1" x="0px" y="0px"
		 width="32px" height="32px" viewBox="0 0 32 32">
	<path fill={color} d="M16.3,0.9l4.4,9.9c0.1,0.1,0.2,0.2,0.3,0.2l10.7,1.1c0.3,0,0.4,0.4,0.2,0.6l-8,7.2c-0.1,0.1-0.1,0.2-0.1,0.3
		L26,30.9c0.1,0.3-0.3,0.5-0.5,0.4l-9.3-5.4c-0.1-0.1-0.2-0.1-0.4,0l-9.3,5.4c-0.3,0.2-0.6-0.1-0.5-0.4l2.2-10.6c0-0.1,0-0.3-0.1-0.3
		l-8-7.2c-0.2-0.2-0.1-0.6,0.2-0.6L11,11c0.1,0,0.2-0.1,0.3-0.2l4.4-9.9C15.8,0.6,16.2,0.6,16.3,0.9z"/>
	</svg>
);
