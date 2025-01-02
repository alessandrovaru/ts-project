(()=>{
  const login = (data: {username: string, password: string})=> {
    console.log('user', data.username);
    console.log('password', data.password);
  }
  login({
    username: 'ale',
    password: '123'
  });

  type Sizes = 'small' | 'medium' | 'large';

  const products: any[] = [];

  const addProduct = (data:
    {
      title: string,
      createdAt: Date,
      stock: number,
      sizes: Sizes
    }
  ) => {
    products.push(data);
  }

  addProduct({
    title: 'Shoes',
    createdAt: new Date(),
    stock: 100,
    sizes: 'medium'
  });

  console.log('products', products);

})();
