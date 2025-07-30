import {products}  from "./items.js"
window.addEventListener("offline", () => {
    errmess.style.display = "flex";
    errmess.classList.remove("online");
    errmess.classList.add("offline");

    errmess.innerHTML = "You're Offline ❌";

    gsap.from(errmess, {
        y: 100,
        opacity: 0,
        duration: 0.3,
    });
})

window.addEventListener("online", () => {
    errmess.style.display = "flex";
    errmess.classList.remove("errormess"); // Assuming this is the offline style
    errmess.classList.add("online");

    errmess.innerHTML = "You're Back Again ✅";

    gsap.from(errmess, {
        y: 100,
        opacity: 0,
        duration: 0.3,
    });

    // Optional: Auto-hide after 3 seconds
    setTimeout(() => {
        errmess.style.display = "none";
        errmess.classList.remove("online");
    }, 3000);
})
// Advertisement Section
async function loadAds() {
      const response = await fetch('ads.json');
      const ads = await response.json();
      const container = document.getElementById('swiper-wrapper');

      ads.forEach(ad => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
          <img src="${ad.image}" alt="${ad.title}" />
         
        `;
        container.appendChild(slide);
      });

      // Initialize Swiper after DOM is ready
      new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }
      });
    }

    loadAds();
const loadingTexts = [
    "✏️ Sharpening pencils...",
    "🖊️ Filling ink in pens...",
    "📚 Organizing notebooks...",
    "📒 Stacking up registers...",
    "🖍️ Refilling markers...",
    "📄 Laminating ideas...",
    "📎 Stapling thoughts together...",
    "📘 Binding creativity...",
    "📖 Flipping through fresh pages...",
    "🖨️ Printing possibilities...",
    "📏 Measuring success in centimeters...",
    "🎨 Coloring your imagination...",
    "📦 Unpacking new supplies...",
    "📝 Drawing dreams on paper...",
    "🖍️ Highlighting your needs...",
    "🗂️ Filing your orders...",
    "🧽 Erasing the wait...",
    "🕳️ Punching through progress...",
    "📠 Scanning your satisfaction...",
    "🖋️ Writing the future with JA Stationery..."
];
const loader = document.querySelector('.loader');
const ltext = document.querySelector('#loadingtext');
const menu = document.querySelector('#menu')
const errmess = document.querySelector('.errormess')
const xmark = document.querySelector('#xmark')
const menunav = document.querySelector('.mobnav');
const tl = gsap.timeline()
document.addEventListener("DOMContentLoaded", () => {
    ltext.innerHTML = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];


    // Optional: Change the loading text every 3 seconds
    setInterval(() => {
        loader.style.opacity = 0.1
        loader.style.transition = "all 0.5s ease"
        setInterval(() => {
            loader.style.display = "none"
        }, 100)
    }, 1000);

    menu.addEventListener("click", () => {
        menunav.style.display = "flex",
            gsap.from(menunav, {
                x: 100,
                duration: 0.2,
                opacity: 0,
            })
        gsap.from(".mobnav ul li", {
            y: -10,
            delay: 0.2,
            opacity: 0,
            stagger: 0.1,
        })
        gsap.from(".mobnav .ctn", {
            y: -10,
            delay: 0.2,
            opacity: 0,
            stagger: 0.1,
        })
    })
    xmark.addEventListener("click", () => {
        menunav.style.display = "none"
    })


    // Gsap Starting
    setTimeout(() => {
        tl.from(".c1rcontent h1", {
            opacity: 0,
            y: 100,
            ease: "power2.out",
            duration: 1,
        })
        tl.from(".c1rcontent h3", {
            opacity: 0,
            ease: "power2.out",
            y: 100,
            duration: 0.8,
        })
        tl.from(".ordernow button", {
            opacity: 0,
            y: 100,
            stagger: 0.2,

        })
    }, 1000)
    gsap.from(".cont2 h1", {
        opacity: 0,
        y: 100,
        duration: 0.8,


    })
    gsap.from(".cont2 p", {
        opacity: 0,
        y: 100,
        duration: 0.8,

    })

    gsap.from(".cont3 img", {
        opacity: 0,
        y: 100,
        duration: 0.8,

    })

    if (document.querySelector('.aboutbody')) {

        gsap.from(".abthero h1", {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.out"
        });

        gsap.utils.toArray(".abtcont1 section").forEach((section, i) => {
            gsap.from(section, {
                y: 60,
                duration: 0.8,
                //   delay: i * 0.1,
                ease: "power2.out"
            });
        });
        gsap.utils.toArray(".sc1c").forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.6,
                delay: 0, // slight stagger effect
                ease: "power2.out",
            });
        });
    }
    // Gsap Ending 
    // Medicines Items

    if (document.querySelector('.nitemsbody')) {

    const categoryFilter = document.querySelector('#categoryFilter');
    const searchInput = document.querySelector('#formulationFilter');
    const quickSearchInput = document.querySelector('#searchInput');
    const medicineContainer = document.querySelector('#nitems');
    const error = document.querySelector('.merror');

    let allMedicines = [];

    // Fetch data once and generate cards
    fetch('medicines.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch');
            return response.json();
        })
        .then(data => {
            allMedicines = data;
            renderMedicineCards(allMedicines);
        })
        .catch(err => {
            console.error('Fetch error:', err);
        });

    function renderMedicineCards(medicines) {
        medicineContainer.innerHTML = '';
        medicines.forEach((medicine, index) => {
            const card = document.createElement("div");
            card.className = "medcard";
            card.setAttribute("data-name", medicine.name.toLowerCase());
            card.setAttribute("data-category", medicine.category.toLowerCase());
            card.innerHTML = `
                <h3>${index + 1}. ${medicine.name}</h3>
                <p>${medicine.category}</p>
                <p>${medicine.formulation || ''}</p>
            `;
            medicineContainer.appendChild(card);
        });

      animateCards()
    }

    function animateCards() {
        const cards = document.querySelectorAll('.medcard');
        gsap.from(cards, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.3,
         
        });
    }

    // Filter logic
    function filterCards() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const searchValue = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll('.medcard');
        let anyVisible = false;

        cards.forEach(card => {
            const name = card.getAttribute("data-name");
            const category = card.getAttribute("data-category");

            const match = (selectedCategory === '' || category === selectedCategory) &&
                          (searchValue === '' || name.includes(searchValue));

            card.style.display = match ? 'block' : 'none';
            if (match) anyVisible = true;
        });

        error.style.display = anyVisible ? 'none' : 'block';
    }

    // Search filter
    function quickSearch() {
        const inputValue = quickSearchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.medcard');
        let anyVisible = false;

        cards.forEach(card => {
            const name = card.querySelector("h3").textContent.toLowerCase();
            const match = name.includes(inputValue);

            if (match) {
                card.style.display = 'block';
                card.style.opacity = 1;
            } else {
                card.style.transition = "all 0.2s ease";
                setTimeout(() => {
                    card.style.display = 'none';
                    card.style.opacity = 0.5;
                }, 300);
            }

            if (match) anyVisible = true;
        });

        error.style.display = anyVisible ? 'none' : 'block';
    }

    // Event bindings
    categoryFilter.addEventListener('change', filterCards);
    searchInput.addEventListener('input', filterCards);
    quickSearchInput.addEventListener('input', quickSearch);
    document.addEventListener('keydown', () => quickSearchInput.focus());


}


})

if (document.querySelector('.sitemsbody')) {
    const categoryDropdown = document.getElementById('categoryDropdown');
    const companyDropdown = document.getElementById('companyDropdown');
    const colorDropdown = document.getElementById('colordropdown');
    const cardContainer = document.getElementById('cardContainer');
    const itemsLoader = document.querySelector('.itemsloader');

    // Helper to get unique values
    const getUnique = (array, key) => [...new Set(array.map(item => item[key]))];

    // Populate category dropdown initially
    const categories = getUnique(products, "category");
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });

    function updateCompanies() {
        const selectedCategory = categoryDropdown.value;
        const filtered = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;
        const companies = getUnique(filtered, "company");

        companyDropdown.innerHTML = '<option value="">Select Company</option>';
        companies.forEach(company => {
            const option = document.createElement("option");
            option.value = company;
            option.textContent = company;
            companyDropdown.appendChild(option);
        });

        updateColors(); // reset colors too
        filterItems();
    }

    function updateColors() {
        const selectedCategory = categoryDropdown.value;
        const selectedCompany = companyDropdown.value;

        const filtered = products.filter(p => {
            const categoryMatch = !selectedCategory || p.category === selectedCategory;
            const companyMatch = !selectedCompany || p.company === selectedCompany;
            return categoryMatch && companyMatch;
        });

        const colors = getUnique(filtered, "color");

        colorDropdown.innerHTML = '<option value="">Select Color</option>';
        colors.forEach(color => {
            const option = document.createElement("option");
            option.value = color;
            option.textContent = color;
            colorDropdown.appendChild(option);
        });

        filterItems();
    }

    function filterItems() {
        const selectedCategory = categoryDropdown.value;
        const selectedCompany = companyDropdown.value;
        const selectedColor = colorDropdown.value;

        const filteredItems = products.filter(item => {
            const categoryMatch = !selectedCategory || item.category === selectedCategory;
            const companyMatch = !selectedCompany || item.company === selectedCompany;
            const colorMatch = !selectedColor || item.color.toLowerCase() === selectedColor.toLowerCase();
            return categoryMatch && companyMatch && colorMatch;
        });

        renderItems(filteredItems);
    }

    function renderItems(itemList) {
        cardContainer.innerHTML = '';
        if (itemsLoader) itemsLoader.style.display = 'none';
        if (itemList.length === 0) {
            cardContainer.innerHTML = '<p>No items found matching your selections.</p>';
            return;
        }

        itemList.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md p-4 mb-4';
            card.innerHTML = `
                <h3 class="text-l font-bold">${item.name}</h3>
                <p class="text-gray-600">Category: ${item.category}</p>
                <p class="text-gray-600">Company: ${item.company}</p>
                <p class="text-gray-600">Color: ${item.color}</p>
            `;
            cardContainer.appendChild(card);
        });
    }

    // Initial rendering
    renderItems(products);

    // Add event listeners
    categoryDropdown.addEventListener('change', updateCompanies);
    companyDropdown.addEventListener('change', updateColors);
    colorDropdown.addEventListener('change', filterItems);
}
