import React from 'react'
import Column from './Column'

const Table = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <Column heads="Name" />
                        <Column heads="Roll" />
                        <Column heads="Result" />
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table
