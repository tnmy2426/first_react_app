import React from 'react'

const List = () => {
    const names = ['Tanmoy', 'Akib', 'Rakib']
    return (
        <div>
            {
                names.map((name, index)=> {
                    return (
                        <h2 key={index}>{ name }</h2>
                    )
                })
            }
        </div>
    )
}

export default List
