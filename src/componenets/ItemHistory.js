import {ChevronDown} from '@styled-icons/boxicons-regular/ChevronDown';

function ItemHistory({sales}){

    const saleRows = sales.map((sale, i) => <Row key={i} retailSale={sale.retailSales} wholesaleSale={sale.wholesaleSales} unitsSold={sale.unitsSold} retailerMargin={sale.retailerMargin} weekEnding={sale.weekEnding}/>)
    return(
        <div className="bg-white flex flex-col w-full">
            <Heading/>
            {saleRows}
        </div>
        
    )
}

function Heading(){
    return(
        <div className="flex flex-row w-full justify-between px-8 py-6 uppercase text-xs border-b-2">
            <div className="flex flex-row items-center">
                <p>Week Ending</p>
                <ChevronDown className="h-5 w-5 text-gray-300"/>
            </div>
            
            <div className="flex flex-row items-center">
                <p>Retail Sales</p>
                <ChevronDown className="h-5 w-5 text-gray-300"/>
            </div>
            <div className="flex flex-row items-center">
                <p>Wholesale Sales</p>
                <ChevronDown className="h-5 w-5 text-gray-300"/>
            </div>
            <div className="flex flex-row items-center">
                <p>Units Sold</p>
                <ChevronDown className="h-5 w-5 text-gray-300"/>
            </div>
            <div className="flex flex-row items-center">
            <p>Retailer Margin</p>
                <ChevronDown className="h-5 w-5 text-gray-300"/>
            </div>
        </div>
        
    )
}

function Row({weekEnding,retailSale,wholesaleSale,unitsSold,retailerMargin}){
    const date = new Date(Date.parse(weekEnding))  
    const formattedDate = `${date.getMonth() + 1}-${date.getDay()}-${date.getFullYear()}`;
    const formattedRS = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(retailSale);
    const formattedWS = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(wholesaleSale);
    const formattedRM = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(retailerMargin);
    return(
        <div className="flex flex-row w-full px-8 py-6 uppercase text-xs border-b-2 text-gray-400 justify-between">
            <p>{formattedDate}</p>
            <p>{formattedRS}</p>
            <p>{formattedWS}</p>
            <p>{unitsSold}</p>
            <p>{formattedRM}</p>
        </div>
        
    )
}

export default ItemHistory;