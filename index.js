import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const data = [
    [
        { name: 'John' },
        { name: 'Jane' },
        { name: 'Bob' }
    ],
    [
        { name: 'Alice' },
        { name: 'Eve' }
    ]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice', 'Eve']

const reverseSentence = (sentence) => {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;