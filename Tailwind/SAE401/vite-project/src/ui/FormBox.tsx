import React from 'react';

interface FormBoxProps {
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormBox({ placeholder, value, onChange }: FormBoxProps) {
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
