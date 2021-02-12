import React from 'react'
import EventSeatIcon from '@material-ui/icons/EventSeat';
import { Button } from '@material-ui/core'

export default function Seat({ empty, lastRow, handleClickOpen }) {
    return (
        <>
            {!empty || lastRow ?
                <Button onClick={handleClickOpen} style={{ width: '20%', height: '50px', margin: '8px' }}>
                    <EventSeatIcon style={{ height: 60, width: 60 }} />
                </Button>
                : <Button style={{ width: '20%', visibility: 'hidden', margin: '8px' }}>
                    <EventSeatIcon />
                </Button>
            }
        </>
    )
}
