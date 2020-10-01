import React from 'react'
import Name from './Name'

const List = () => {
    const names = ['Tanmoy', 'Akib', 'Rakib']

    return (
        <div>
            {
                names.map((name, index)=> {
                    return (
                        <div key={index}>
                            <Name name={name}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List
