const product = [
    {
      id: 0,
      image: './mediaa/black-kit.png',
      title: 'UWCL Womens away jersey 24/25 FC Barcelona',
      price: 99 ,
    },
    {
      id: 1,
      image: './mediaa/green-kit.png',
      title: 'UCL Mens third jersey 24/25 FC Barcelona',
      price: 99,
    },
    {
      id: 2,
      image: './mediaa/green-s.png',
      title: 'FC Barcelona third shorts 24/25 - Women',
      price: 49,
    },
    {
      id: 3,
      image: './mediaa/home-kit.png',
      title: 'UCL Junior home jersey 24/25 FC Barcelona',
      price: 79,
    },
    {
        id: 4,
        image: './mediaa/yellow-kit.png',
        title: 'LFP FC Barcelona fourth shirt 23/24 – Junior',
        price: 74,
    },
    {
      id: 5,
      image: './mediaa/man-k.png',
      title: 'UCL Mens home jersey 24/25 FC Barcelona',
      price: 99,
    }
  ];
  const categories = [...new Set(product.map((item) => { return item }))]
  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>` +
          "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
      </div>`
    )
  }).join('')
  
  var cart = [];
  
  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
        );
      }).join('');
    }
  }