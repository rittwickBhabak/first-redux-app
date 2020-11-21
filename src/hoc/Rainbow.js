import React from 'react'

const Rainbow = (WrappedClass) => {
    const colors = ['red', 'yellow', 'pink', 'green', 'blue', 'orange'];
    const color = colors[Math.floor(Math.random()*5)];
    const className = color + '-text';
    return props => {
        return (
            <div className={className}>
                <WrappedClass {...props} />
            </div>
        )
    }
}

export default Rainbow
