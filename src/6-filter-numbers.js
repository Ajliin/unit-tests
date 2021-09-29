export const filterNumbers = (array, largerThan) => {
  let theBiggest = array[2] 
  
  array.filter(item =>{
    item < largerThan
    return item
  })
}
