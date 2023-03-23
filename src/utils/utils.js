// this function for showing '...' in cartItem.
// when the title is greater than 50 characheters;
export const addEllipse = (text) => {
    if(text.length > 50){
        return text.substring(0,50) + '...';
    }else{
        return text;
    }
}