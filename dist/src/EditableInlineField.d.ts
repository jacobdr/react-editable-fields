import 'source-map-support/register';
import * as React from 'react';
export declare type EditableFieldPropTypes = {
    initialValue: any;
    saveHandler: Function;
    requireSameTypeOnSave?: boolean;
};
export declare type EditableFieldStateType = {
    initialValue?: string;
    userTextInput?: string;
    textEnteredSinceFocus?: boolean;
    textEnteredNotSaved?: boolean;
    textInputCurrentlyFocused?: boolean;
    inputCurrentlyVisible?: boolean;
};
export declare class EditableInlineField extends React.Component<EditableFieldPropTypes, EditableFieldStateType> {
    static displayName: string;
    static propTypes: {
        initialValue: React.Validator<any>;
        saveHandler: React.Requireable<any>;
    };
    constructor(props: any);
    componentDidMount(): void;
    submit(event: any): void;
    userClickOutsideInput: (event: React.SyntheticEvent) => void;
    handleChangeToInput: (event: any) => void;
    cancel: (event: React.SyntheticEvent) => void;
    saveUserInput: (event: React.SyntheticEvent) => void;
    render(): JSX.Element;
}
