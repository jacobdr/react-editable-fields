import 'source-map-support/register';
import * as React from 'react';
export declare type EditableFieldPropTypes = {
    initialValue: any;
    saveHandler: Function;
    requireSameTypeOnSave?: boolean;
};
export declare type EditableFieldStateType = {
    value?: any;
    textEnteredSinceFocus?: boolean;
    textEnteredNotSaved?: boolean;
    showUserInputBox?: boolean;
};
export declare class EditableField extends React.Component<EditableFieldPropTypes, EditableFieldStateType> {
    static displayName: string;
    static propTypes: {
        initialValue: React.Validator<any>;
        saveHandler: React.Requireable<any>;
        requireSameTypeOnSave: React.Requireable<any>;
    };
    refs: {
        [key: string]: any;
        "target": any;
    };
    constructor(props: any);
    componentDidMount(): void;
    submit(event: any): void;
    handleChangeToInput: (event: any) => void;
    handleInputBlur: (event: React.FocusEvent) => void;
    save: (event: React.SyntheticEvent) => void;
    cancel: (event: React.SyntheticEvent) => void;
    showUserInputBox: () => void;
    shouldShowDataChangeWarning: () => boolean;
    render(): JSX.Element;
}
