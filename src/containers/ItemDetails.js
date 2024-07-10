function ItemDetails({image,title,subtitle, tags}){
    return(
        <div className="bg-white h-full w-full justify-center text-center pt-6">
            <img className="h-40 w-40 mx-auto" src={image} alt="Item Image"/>
            <p className="font-bold">{title}</p>
            <div className="w-4/5 mx-auto mb-6">
                <p className="text-sm text-slate-400">{subtitle}</p>
            </div>
            <Tags tags={tags}/>
        </div>
    )
}

function Tags({tags}){
    const tagButtons = tags.map(tag => <div className="border border-slate-300 rounded max-w-fit px-4"><p className="text-xs">{tag}</p></div>)
    return (
        <div className="border-y border-slate-300 w-full flex flex-row flex-wrap py-2 gap-2 px-2">
            {tagButtons}
        </div>
    )
}

export default ItemDetails;