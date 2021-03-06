import * as React from "react";

class Paragraph extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <p>
                {this.props.children}
            </p>
        );
    }
}

export default Paragraph;
