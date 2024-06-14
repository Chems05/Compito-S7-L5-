document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('Description').value;
    const brand = document.getElementById('Brand').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const price = document.getElementById('Price').value;
    
    const newProduct = {
        name: name,
        description: description,
        brand: brand,
        imageUrl: imageUrl,
        price: price
    };
    
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmFhODdjMjM5YzAwMTUyZjRiNDYiLCJpYXQiOjE3MTgzNTI1NTMsImV4cCI6MTcxOTU2MjE1M30.Utg2WV7sT50QtoFfQ-9fWC7kFQ7XF5ZqPZaYu0USIsU'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        console.log('Product created successfully:', data);
        alert('Product created successfully!');
    })
    .catch(error => {
        console.error('Error creating product:', error);
        alert('Error creating product');
    });
});




