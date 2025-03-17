import React from 'react';

interface TextboxProps {
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Textbox({ placeholder, value, onChange }: TextboxProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="p-3 border rounded bg-textbox"
        />
    );
}
