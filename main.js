let menu_button = document.getElementById('menu-button');
let menu_list = document.getElementById('menu-list');

const handleOpen = () => {
	console.log('click');
	menu_list.classList.toggle('hidden');
}

menu_button.addEventListener('click', handleOpen);