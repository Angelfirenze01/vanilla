/**
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import classNames from "classnames";
import Heading, { ICommonHeadingProps, IHeadingProps } from "@library/components/Heading";
import FrameHeader, { IFrameHeaderProps } from "@library/components/frame/FrameHeader";

interface IProps extends ICommonHeadingProps {
    children: React.ReactNode;
}

/**
 * Generic header for frame with action
 */
export default class FrameHeaderWithAction extends React.PureComponent<IFrameHeaderProps> {
    public render() {
        return (
            <FrameHeader {...this.props} className={classNames(this.props.className, "frameHeaderWithAction")}>
                <span className="frameHeaderWithAction-action">{this.props.children}</span>
            </FrameHeader>
        );
    }
}
