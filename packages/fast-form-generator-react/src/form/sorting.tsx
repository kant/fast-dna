import * as React from "react";

export interface ISortableOptions {
    key: string;
    index: number;
    value: any;
}

export enum axis {
    x = "x",
    y = "y"
}

export interface ISortingProps {
    pressDelay: number;
    lockAxis: axis;
}

export const sortingProps: ISortingProps = {
    pressDelay: 150,
    lockAxis: axis.x
};

export interface ISortableListItemProps {
    id?: string;
}

export class SortableListItem extends React.Component<ISortableListItemProps, {}> {
    public render(): JSX.Element {
        return(
            <li draggable={true} id={this.props.id}>
                {this.props.children}
            </li>
        );
    }
}
