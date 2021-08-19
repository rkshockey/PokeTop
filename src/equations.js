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