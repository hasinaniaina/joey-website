function openMenu() {
    const open_menu = document.getElementById('open-menu');
    const close_menu = document.getElementById('close-menu');
    const menu_list = document.getElementById('menu-list');

    open_menu.addEventListener('click', () => {
        open_menu.classList.remove('active');
        close_menu.classList.add('active');
        menu_list.classList.add('active');
    });

    close_menu.addEventListener('click', () => {
        close_menu.classList.remove('active');
        open_menu.classList.add('active');
        menu_list.classList.remove('active');
    });
}


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function selectMenu() {
    const menu_item = document.getElementsByClassName('menu-item');
    const scroll_to = document.getElementById('scroll-to')
    let menu_active = '';


    let smoother = ScrollSmoother.create({
        smooth: 1, 
        effects: true,
        smoothTouch: 0.1, 
        effects: true
    });

    for (let item of menu_item) {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            for (let item_active of menu_item) {
                if (item_active.classList.contains('active')) {
                    menu_active = item_active;
                }
            }

            item.classList.add('active');
            menu_active.classList.remove('active');

            const section_id = '#' + item.innerHTML.toLocaleLowerCase().replace('<span class="count">20</span>', '');
            smoother.scrollTo(section_id, true, 'top top');
        })
    }

    scroll_to.addEventListener('click', (e) => {
        e.preventDefault();

        const projects_section = '#projects';
        smoother.scrollTo(projects_section, true, 'top top');
    });
}

function scrollingSmooth() {
    
}

openMenu();
scrollingSmooth();
selectMenu();