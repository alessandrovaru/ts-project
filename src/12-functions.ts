(()=>{
  type Sizes = 'small' | 'medium' | 'large';

  function createProductToJSON(
    title: string,
    createdAt: Date,
    stock: number,
    sizes: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      sizes
    }
  }

  const product = createProductToJSON('Shoes', new Date(), 100, 'medium');
  console.log('product', product);
})()
