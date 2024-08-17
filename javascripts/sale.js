
// Datos de los productos
const products = [
    { id: 1, name: "Mezcla original 200g", price: 500 },
    { id: 2, name: "Mezcla original 500g", price: 900 },
    { id: 3, name: "Mezcla especial 200g", price: 700 },
    { id: 4, name: "Mezcla especial 500g", price: 1200 }
  ];

  // Arreglo para almacenar las compras
  const purchases = [];

  // Elementos del DOM
  const productElement = document.getElementById("product");
  const numberElement = document.getElementById("number");

  // Función para agregar productos al carrito
  function add() {
    const productId = parseInt(productElement.value);
    const quantity = parseInt(numberElement.value);

    // Validar la selección del producto
    if (productId === 0 || quantity < 1) {
      alert("Por favor seleccione un producto y una cantidad válida.");
      return;
    }

    // Buscar el producto por ID
    const product = products.find(p => p.id === productId);

    if (product) {
      // Verificar si el producto ya está en purchases
      const existingPurchase = purchases.find(p => p.id === productId);

      if (existingPurchase) {
        existingPurchase.quantity += quantity;
      } else {
        purchases.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity
        });
      }

      alert(`Producto agregado:\n${product.name}\nCantidad: ${quantity}`);
      console.log("Compras actualizadas:", purchases);
    }
  }
  
  
  // Elementos del DOM
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const modalBody = document.getElementById("modal-body");
  const subtotalElement = document.getElementById("subtotal");
  const shippingElement = document.getElementById("shipping");
  const totalElement = document.getElementById("total");
  
  // Función para agregar productos al carrito
  function add() {
    const productId = parseInt(productElement.value);
    const quantity = parseInt(numberElement.value);
  
    // Validar la selección del producto
    if (productId === 0 || quantity < 1) {
      alert("Por favor seleccione un producto y una cantidad válida.");
      return;
    }
  
    // Buscar el producto por ID
    const product = products.find(p => p.id === productId);
  
    if (product) {
      // Verificar si el producto ya está en purchases
      const existingPurchase = purchases.find(p => p.id === productId);
  
      if (existingPurchase) {
        existingPurchase.quantity += quantity;
      } else {
        purchases.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity
        });
      }
  
      alert(`Producto agregado:\n${product.name}\nCantidad: ${quantity}`);
      console.log("Compras actualizadas:", purchases);
    }
  }
  
  // Función para calcular el importe total y mostrar el modal
  function calc() {
    if (purchases.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
  
    // Calcular subtotal
    let subtotal = 0;
    purchases.forEach(item => {
      subtotal += item.price * item.quantity;
    });
  
    // Calcular costos de envío según las reglas
    let shippingCost = 0;
    if (subtotal < 2000) {
      shippingCost = 500;
    } else if (subtotal >= 2000 && subtotal < 3000) {
      shippingCost = 250;
    } else {
      shippingCost = 0; // Gratis para pedidos superiores a 3000 yenes
    }
  
    // Construir el contenido del modal
    let itemList = "";
    purchases.forEach(item => {
      itemList += `${item.name}, ${item.price} yenes : ${item.quantity} item${item.quantity > 1 ? 's' : ''}.<br>`;
    });
  
    // Mostrar el contenido en el modal
    modalBody.innerHTML = itemList;
    subtotalElement.textContent = `El subtotal: ${subtotal} yenes.`;
    shippingElement.textContent = `Los gastos de envío son: ${shippingCost} yenes.`;
    totalElement.textContent = `Importe a pagar: ${subtotal + shippingCost} yenes.`;
  
    // Mostrar el modal y el overlay
    modal.style.display = "block";
    overlay.style.display = "block";
  }
  
  // Cerrar el modal al hacer clic fuera del contenido
  overlay.addEventListener("click", function() {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
  