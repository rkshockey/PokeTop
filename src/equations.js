export const sizeClass = (height) => {
    if (height < 0.5){
        return 1
    }else if(height < 0.8){
        return 2
    }else if(height < 1.2){
        return 3
    }else if(height < 1.9){
        return 4
    }else if(height < 2.9){
        return 5
    }else if(height < 4.5){
        return 6
    }else if(height < 6.9){
        return 7
    }else if (height < 10.7){
        return 8
    }else if(height < 16.7){
        return 9
    }else{
        return 10
    }
}

export const ranges = (metric) => {
    return <div className='ranges'>
        <h4>Ranges</h4>
        <p>Close: {Math.floor(metric * 1.09)}yds</p>
        <p>Medium: {Math.floor(metric * 3.28)}yds</p>
        <p>Far: {Math.floor(metric * 8.75)}yds</p>
    </div>
}

export const movement = (baseSpeed, speed) => {
    return <div className='movement'>
        <h4>Movement per turn</h4>
        <p>Normal: {Math.floor(baseSpeed / 4.2) + Math.floor(speed / 10)}yds</p>
        <p>Fast: {Math.floor(baseSpeed / 2.1) + Math.floor(speed / 10)}yds</p>
    </div>
}