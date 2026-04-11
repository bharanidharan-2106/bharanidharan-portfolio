import React from 'react';

const FloatingSymbols = () => {
    const symbols = ['{ }', '< >', '( )', '[ ]', '</>', 'import', ';', 'java', 'class', 'static', 'void'];

    // Create random positions and timings
    const items = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        char: symbols[i % symbols.length],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}rem`,
        delay: `${Math.random() * 5}s`,
        duration: `${20 + Math.random() * 10}s`
    }));

    return (
        <div className="floating-symbols-container">
            {items.map(item => (
                <span
                    key={item.id}
                    className="floating-symbol"
                    style={{
                        top: item.top,
                        left: item.left,
                        fontSize: item.size,
                        '--delay': item.delay,
                        '--duration': item.duration
                    }}
                >
                    {item.char}
                </span>
            ))}
        </div>
    );
};

export default FloatingSymbols;
