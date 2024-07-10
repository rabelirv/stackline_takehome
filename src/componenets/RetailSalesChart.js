import { LineChart } from '@mui/x-charts/LineChart';

function RetailSalesChart({sales}){

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const retailSales = sales.map((sale) => sale.retailSales)
    const wholesaleSales = sales.map((sale) => sale.wholesaleSales)

    const limitedRetailSales = retailSales.slice(0, months.length);
    const limitedWholesaleSales = wholesaleSales.slice(0, months.length);

    return(
        <div className="bg-white flex flex-col w-full mb-12 p-8">
            <p className="pb-6">Retail Sales</p>
           <LineChart
             yAxis={[
                {
                  id: 'Years',
                  data: months,
                  type: 'category',
                  scale: { type: 'point' },
                },
              ]}
              series={[
                {
                  id: 'Retail Sales',
                  data: limitedRetailSales,
                },
                {
                  id: 'Wholesale Sales',
                  data: limitedWholesaleSales,
                }
              ]}
              margin={{ left: 60, top: 10, right: 20 }}
              width={1000}
              height={300}
           />
        </div>
        
    )
}

export default RetailSalesChart