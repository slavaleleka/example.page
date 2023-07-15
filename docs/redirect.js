const TARGET_URL = 'example.com';

const redirect = () => {
    const { location } = window;
    debugger;
    location.replace(TARGET_URL);
};

redirect();
