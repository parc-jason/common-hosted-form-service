export default [
    {
        key: 'tableView',
        ignore: true
    },
    {
        key: 'hidden',
        ignore: true
    },
    {
        key: 'modalEdit',
        ignore: true
    },
    {
        key: 'refreshOnChange',
        ignore: true
    },
    {
        key: 'className',
        ignore: true,
    },
    {
        key: 'prefix',
        ignore: true
    },
    {
        key: 'suffix',
        ignore: true
    },
    {
        key: 'inputMask',
        ignore: true
    },
    {
        key: 'allowMultipleMasks',
        ignore: true
    },
    {
        key: 'showWordCount',
        ignore: true,
    },
    {
        key: 'showCharCount',
        ignore: true,
    },
    {
        key: 'labelPosition',
        ignore: true
    },
    {
        weight: 15,
        type: 'checkbox',
        label: 'Hide Input Labels',
        tooltip: 'Hide the labels of component inputs. This allows you to show the labels in the form builder, but not when it is rendered.',
        key: 'hideInputLabels',
        input: true
    },
    {
        type: 'select',
        input: true,
        key: 'inputsLabelPosition',
        label: 'Inputs Label Position',
        tooltip: 'Position for the labels for inputs for this field.',
        weight: 40,
        defaultValue: 'top',
        dataSrc: 'values',
        data: {
            values: [
                { label: 'Top', value: 'top' },
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
                { label: 'Bottom', value: 'bottom' }
            ]
        }
    },
    {
        key: 'placeholder',
        ignore: true
    },
    {
        weight: 213,
        type: 'checkbox',
        label: 'Use Locale Settings',
        tooltip: 'Use locale settings to display day.',
        key: 'useLocaleSettings',
        input: true
    },
];
