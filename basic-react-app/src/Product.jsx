import './Product.css'
import Price from './Price'

function Product({title, idx}) {

  //Rendering Arrays
  // const list = features.map((feature) => {
  //   <li>{feature}</li>
  // });

  // if(price>25000){  //Conditionals.
  //   return (
  //       <div className="Product">
  //         <h1>{title}</h1>
  //         <h5>Price: {price}</h5>
  //         <p>
  //           {features.map((feature) => (
  //             <li>{feature}</li>
  //           ))}
  //         </p>
  //         <p>Discount of 5%</p>
  //       </div>
  //   );
  // } else {
  //   return (
  //     <div className="Product">
  //       <h1>{title}</h1>
  //       <h5>Price: {price}</h5>
  //       <p>
  //         {/* Rendering Arrays. */}
  //         {features.map((feature) => (
  //           <li>{feature}</li>
  //         ))}
  //       </p>
  //     </div>
  //   );
  // }

  //Conditionals
  // let isDiscount = price > 25000 ? "5% discount" : "";
  // let styles = {backgroundColor: "#dbdbdb"};

//   return (
//     <div className="Product">
//       <h1>{title}</h1>
//       <p>
//         {features.map((feature) => (
//           <li>{feature}</li>
//         ))}
//       </p>
//       <div className='Bottom'>
//         <h5>Price: {price}</h5>
//         {price > 25000 ? <p style={styles}>5% discount</p> : null}
//       </div>
//     </div>
// );
    let oldPrices = ["12495", "11900", "899", "1599"];
    let newPrices = ["8999", "9199", "599", "278"];
    let description = [["8000 DPI", "5 programmable keys"], ["intuitive surface", "designed for iPad Pro"], ["designed for iPad Pro", "intuitive surface"], ["wireless", "optical orientation"]];
    return (
      <div className='Product'>
        <h4>{title}</h4>
        <p>{description[idx][0]}</p> 
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
      </div>
    )
    
}

export default Product