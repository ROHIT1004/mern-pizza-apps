import React from 'react'

export default function Error({success}) {
    return (
        <div>
            <div class="alert alert-danger" role="alert">
                {success}
            </div>
        </div>
    )
}
