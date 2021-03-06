/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import * as React from "react";
import classNames from "classnames";

export interface IProps {
    className?: string;
    count?: number;
    label: string; // For accessibility, should be in the style of: "Notifications: "
    max?: number;
}

/**
 * Implements Count to display over icon
 */
export default class Count extends React.Component<IProps> {
    public render() {
        const hasCount = !!this.props.count;
        const max = this.props.max || 99;
        const visibleCount = hasCount && this.props.count! < max ? this.props.count : `${max}+`;

        return (
            <div className={classNames("count", this.props.className)}>
                <span className="sr-only" aria-live="polite">
                    {hasCount ? this.props.label + ` ${this.props.count}` : ""}
                </span>
                {hasCount && (
                    <div className="count-text" aria-hidden={true}>
                        {visibleCount}
                    </div>
                )}
            </div>
        );
    }
}
