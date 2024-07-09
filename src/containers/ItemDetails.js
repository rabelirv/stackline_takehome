function ItemDetails({item}){
    console.log(item)
    return(
        <div className="bg-white h-full w-full justify-center">
            <img className="h-min w-min" src={item.image} alt="Item Image"/>
        </div>
    )
}

export default ItemDetails;