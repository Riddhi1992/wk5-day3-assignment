// Vue component

Vue.component('food-item', {
    props: ['items'],
    template: `<h2>Selections</h2>
    <div class='food-item'>
        <div class='food' v-for='item in items'>
            <img class="image" style='background-size: cover; background-position:center' :src="item.food_image">
            <div class='name'>{{item.name}}</div>
            <div class='description'>{{item.description}}</div>
            <button>Add to cart</button>
        </div>
    </div>`,
});

const vue = new Vue({
    el: '#vue',
    data: {
        itemss: [
            {
                id: 1,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg',
                name: 'Pasta',
                description: "Healthy Pasta"
            },
            {
                id: 2,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg',
                name: 'Red Crab',
                description: "Fresh from Alaska"
            },
            {
                id: 3,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg',
                name: 'Breakfast Special',
                description: "Good for the soul"
            },
            {
                id: 4,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg',
                name: 'Sea Shell Mix',
                description: "For the shell lovers"
            },
            {
                id: 5,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg',
                name: 'Ultimate Kebab',
                description: "The best from Middle East"
            },
            {
                id: 6,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg',
                name: 'Chicken Steak',
                description: "Grilled to perfection"
            },
            {
                id: 7,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg',
                name: 'Filet Mignon',
                description: "Juicy steak served with potatoes at gratin"
            },
            {
                id: 8,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg',
                name: 'Bistro Brunch',
                description: "A touch of Australia"
            },
            {
                id: 9,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg',
                name: 'California Crepe',
                description: "Stuffed with grilled shrimp"
            },
            {
                id: 10,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg',
                name: 'Top Burger',
                description: "The tallest hamburger from Peru"
            },
            {
                id: 11,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG',
                name: 'Chicken Garlic Pizza',
                description: "Oue specialty pizza"
            },
            {
                id: 12,
                food_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg',
                name: 'Wok away healthy',
                description: "Healthy blend of noodles and veggies"
            },
            
        ]
    }
})