"use client"

import Button from '@mui/material/Button';

let PointProfileCompletion = 200

export default function ButtonMUI() {

    return (
        <>
            <div className="buttonMUI">
                <Button variant="contained">Collect {PointProfileCompletion} Points</Button>
            </div>

        </>
    )
}
