import React from 'react';

function ContestForm (props){
    const {view, setView} = props

    function changeView (e){
        setView(e.target.value)
    }

    return <form>
        <select name='contest' value={view} onChange={changeView}>
            <option value='battle'>Battle View</option>
            <option value='contest'>Contest View</option>
        </select>
    </form>
}

export default ContestForm