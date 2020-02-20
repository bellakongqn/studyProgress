import React from 'react'
import './Rem.css'

function Rem(){
    return(
        <>
            <div className="panel">
                <h2>Single-origin</h2>
                <div className="panel-body">
                    We have built partnerships with small farms around the world to
                    hand-select beans at the peak of season. We then carefully roast
                    in <a href="/batch-size">small batches</a> to maximize their
                    potential.
                </div>
            </div>
            <br />
            <aside className="dark">    
                <div className="panel large">
                    <h2>Single-origin</h2>
                    <div className="panel-body">
                        We have built partnerships with small farms around the world to
                        hand-select beans at the peak of season. We then carefully roast
                        in <a href="/batch-size">small batches</a> to maximize their
                        potential.
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Rem;