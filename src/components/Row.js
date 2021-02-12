import React from 'react'
import Seat from './Seat';

export default function Row({ transparent, lastRow, handleClickOpen }) {
    return (
        <div style={{ display: 'flex' }}>
            <Seat handleClickOpen={handleClickOpen} />
            <Seat handleClickOpen={handleClickOpen} />
            <Seat empty lastRow={lastRow} handleClickOpen={handleClickOpen} />
            {!transparent ? <Seat handleClickOpen={handleClickOpen} /> : <Seat empty />}
            {!transparent ? <Seat handleClickOpen={handleClickOpen} /> : <Seat empty />}
        </div>
    )
}
