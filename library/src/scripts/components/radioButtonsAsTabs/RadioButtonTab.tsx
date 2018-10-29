/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import * as React from "react";
import classNames from "classnames";
import { ITabProps, withTabs } from "@library/contexts/TabContext";

interface IProps extends ITabProps {
    label: string;
    className?: string;
    data: any;
    defaultTab: any;
}

/**
 * Implement what looks like a tab, but what is semantically radio button. To be used in the RadioButtonsAsTabs component
 */
// export default class RadioButtonTab extends React.Component<IRadioButtonTab> {
class RadioButtonTab extends React.Component<IProps> {
    public render() {
        return (
            <label className={classNames("radioButtonsAsTabs-tab", this.props.className)}>
                <input
                    className="radioButtonsAsTabs-input sr-only"
                    type="radio"
                    onClick={this.props.setData}
                    defaultChecked={this.props.defaultTab === this.props.data}
                    name={this.props.groupID}
                    value={this.props.label}
                />
                <span className="radioButtonsAsTabs-label">{this.props.label}</span>
            </label>
        );
    }

    private onClick = e => {
        this.props.setData(this.props.data);
    };
}

export default withTabs<IProps>(RadioButtonTab);