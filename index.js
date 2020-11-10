let btn = document.querySelectorAll('.foodsbtn');
let storeItems = document.querySelectorAll('.store-item');
let search = document.querySelector('#search');


btn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        if (filter === 'all') {
            storeItems.forEach(item => {
                item.style.display = 'block'
            })
        } else if (filter === 'cakes') {
            show('cakes');
        } else if (filter === 'cupcakes') {
            show('cupcakes')
        } else if (filter === 'sweets') {
            show('sweets')
        } else if (filter === 'doughnuts') {
            show('doughnuts')
        }
    })
})

function show(food) {
    storeItems.forEach(item => {
        if (item.classList.contains(food)) {
            item.style.display = 'block'
            item.style.margin = '2px 30px'
        } else {
            item.style.display = 'none'
        }
    });
}

