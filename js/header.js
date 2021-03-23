window.onscroll = () => {
    const nav = document.querySelector('header'); {
        if (this.scrollY <= 152) nav.className = '';
        else nav.className = 'scroll';
    }
};
